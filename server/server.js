const PORT = 3001;
const express = require("express");
const app = express();
const pool = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

// Get user details
app.get("/user/details/:id", async (req, res) => {
  try {
    const user = await pool.query('SELECT * FROM "User" WHERE UserID = $1', [
      req.params.id,
    ]);
    if (!user.rows[0]) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    } else {
      return res.status(200).json({ success: true, user: user.rows[0] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Login
app.post("/user/login", async (req, res) => {
  console.log("Receiving login request");
  const { email, password } = req.body;

  try {
    // Check if the email and password are valid
    const user = await pool.query('SELECT * FROM "User" WHERE email = $1', [
      email,
    ]);

    if (!user || user.rows.length === 0 || user.rows[0].password !== password) {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    } else {
      res
        .status(200)
        .json({
          success: true,
          message: "Login successful",
          user: user.rows[0],
        });
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during login" });
  }
});

// Signup
app.post("/user/signup", async (req, res) => {
  console.log("Receiving signup request");
  const { firstName, lastName, email, password, phoneNo } = req.body;

  try {
    // Check if the email is already taken
    const existingEmail = await pool.query(
      'SELECT * FROM "User" WHERE email = $1',
      [email]
    );
    if (existingEmail.rows.length > 0) {
      console.log("Email is already taken");
      res
        .status(409)
        .json({ success: false, message: "Email is already taken" });
      return;
    }

    // Check if the phone number is already taken
    const existingPhone = await pool.query(
      'SELECT * FROM "User" WHERE phoneNo = $1',
      [phoneNo]
    );
    if (existingPhone.rows.length > 0) {
      res
        .status(409)
        .json({ success: false, message: "Phone number is already taken" });
      return;
    }

    // Create a new user
    const newUser = await pool.query(
      'INSERT INTO "User" (firstName, lastName, email, password, phoneNo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [firstName, lastName, email, password, phoneNo]
    );

    if (newUser) {
      res
        .status(201)
        .json({
          success: true,
          message: "Signup successful",
          user: newUser.rows[0],
          id: newUser.rows[0].UserID,
        });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Failed to create account" });
    }
  } catch (error) {
    console.error("Error occurred during signup:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during signup" });
  }
});

// Buying a product
app.post("/user/buy", async (req, res) => {
  console.log("Tyring to buy a product");
  const { userID, productID, quantity } = req.body;
  try {
    // Check if the product exists
    const product = await pool.query("SELECT * FROM game WHERE gameID = $1", [
      productID,
    ]);
    if (!product || product.rows.length === 0) {
      res
        .status(401)
        .json({ success: false, message: "Product does not exist" });
      return;
    }

    // Check if the quantity is valid
    if (quantity <= 0 || quantity > product.rows[0].quantity) {
      res.status(401).json({ success: false, message: "Invalid quantity" });
      return;
    }

    await pool.query("BEGIN");

    // Create a new order
    const newOrder = await pool.query(
      'INSERT INTO "Order" (UserID, gameID, quantity) VALUES ($1, $2, $3) RETURNING *',
      [userID, productID, quantity]
    );

    // Update the quantity of the product
    const newQuantity = product.rows[0].quantity - quantity;
    const updatedProduct = await pool.query(
      "UPDATE game SET quantity = $1 WHERE gameID = $2 RETURNING *",
      [newQuantity, productID]
    );

    if (newOrder && updatedProduct) {
      await pool.query("COMMIT");
      res
        .status(201)
        .json({
          success: true,
          message: "Order successful",
          order: newOrder.rows[0],
          product: updatedProduct.rows[0],
        });
    } else {
      await pool.query("ROLLBACK");
      res
        .status(500)
        .json({ success: false, message: "Failed to create order" });
    }
  } catch (error) {
    console.error("Error occurred during buying:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during buying" });
  }
});

app.get("/user/orders/cancel/:id", async (req, res) => {
  console.log("Cancelling an order");
  const { id } = req.params;

  try {
    await pool.query("BEGIN");

    // Retrieve the order
    const order = await pool.query('SELECT * FROM "Order" WHERE orderID = $1', [
      id,
    ]);
    if (!order || order.rows.length === 0) {
      res.status(401).json({ success: false, message: "Order does not exist" });
      return;
    }

    // Retrieve the product
    const product = await pool.query("SELECT * FROM game WHERE gameID = $1", [
      order.rows[0].gameID,
    ]);
    if (!product || product.rows.length === 0) {
      res
        .status(401)
        .json({ success: false, message: "Product does not exist" });
      return;
    }

    // Update the quantity of the product
    const newQuantity = product.rows[0].quantity + order.rows[0].quantity;
    const updatedProduct = await pool.query(
      "UPDATE game SET quantity = $1 WHERE gameID = $2 RETURNING *",
      [newQuantity, order.rows[0].gameID]
    );

    // Set the status of the order to cancelled
    const updatedOrder = await pool.query(
      "UPDATE \"Order\" SET status = 'Cancelled' WHERE orderID = $1 RETURNING *",
      [id]
    );

    if (updatedProduct && updatedOrder) {
      await pool.query("COMMIT");
      res
        .status(200)
        .json({
          success: true,
          message: "Order cancelled",
          order: updatedOrder.rows[0],
          product: updatedProduct.rows[0],
        });
    }
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error occurred during cancelling:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during cancelling" });
  }
});

// Get all orders of a user
app.get("/user/orders/:id", async (req, res) => {
  console.log("Retrieving all orders of a user");
  const { id } = req.params;

  try {
    // Retrieve all orders of a user
    const orders = await pool.query(
      'SELECT "Order".OrderID, "User".FirstName, "User".LastName, "User".Email, "User".PhoneNo, Game.Title, "Order".OrderDate, "Order".TotalAmount, "Order".Status ' +
        'FROM "Order" ' +
        'JOIN "User" ON "Order".UserID = "User".UserID ' +
        'JOIN Game ON "Order".GameID = Game.GameID ' +
        'WHERE "Order".UserID = $1',
      [id]
    );

    res.status(200).json({ success: true, orders: orders.rows });
  } catch (error) {
    console.error("Error occurred while retrieving orders:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while retrieving orders",
      });
  }
});

// Define the route to retrieve all products in the inventory
app.get("/games", async (req, res) => {
  console.log("Retrieving all products in the inventory");

  try {
    // Retrieve all products in the inventory
    const products = await pool.query("SELECT * FROM game");

    res.status(200).json({ success: true, products: products.rows });
  } catch (error) {
    console.error("Error occurred while retrieving products:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred while retrieving products",
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
