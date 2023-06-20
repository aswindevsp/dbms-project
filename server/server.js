const PORT = 3001;
const express = require("express");
const app = express();
const pool = require("./db");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// Get user details
app.get("/user/details/:id", async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM \"User\" WHERE UserID = $1", [req.params.id]);
    if (!user.rows[0]) {
      return res.status(404).json({ success: false,  message: "User not found" });
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
    const user = await pool.query("SELECT * FROM \"user\" WHERE email = $1", [email]);

    if (!user || user.rows.length === 0 || user.rows[0].password !== password) {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    } else {
      res.status(200).json({ success: true, message: 'Login successful', user: user.rows[0] });
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
    res.status(500).json({ success: false, message: 'An error occurred during login' });
  }
});

// Signup
app.post("/user/signup", async (req, res) => {
  console.log("Receiving signup request");
  const { firstName, lastName, email, password, phoneNo } = req.body;

  try {
    // Check if the email is already taken
    const existingEmail = await pool.query("SELECT * FROM \"user\" WHERE email = $1", [email]);
    if (existingEmail.rows.length > 0) {
      console.log("Email is already taken");
      res.status(409).json({ success: false, message: 'Email is already taken' });
      return;
    }

    // Check if the phone number is already taken
    const existingPhone = await pool.query("SELECT * FROM \"user\" WHERE phoneNo = $1", [phoneNo]);
    if (existingPhone.rows.length > 0) {
      res.status(409).json({ success: false, message: 'Phone number is already taken' });
      return;
    }

    // Create a new user
    const newUser = await pool.query("INSERT INTO \"user\" (firstName, lastName, email, password, phoneNo) VALUES ($1, $2, $3, $4, $5) RETURNING *", [firstName, lastName, email, password, phoneNo]);

    if (newUser) {
      res.status(201).json({ success: true, message: 'Signup successful', user: newUser.rows[0], id: newUser.rows[0].UserID });
    } else {
      res.status(500).json({ success: false, message: 'Failed to create account' });
    }
  } catch (error) {
    console.error("Error occurred during signup:", error);
    res.status(500).json({ success: false, message: 'An error occurred during signup' });
  }
});

// Add to shopping cart
app.post("/user/addCart", async (req, res) => {
  console.log("Receiving add to cart request");
  const { userId, gameId, quantity } = req.body;

  try {
    // Check if the product is already in the shopping cart
    const existingItem = await pool.query("SELECT * FROM shoppingcart WHERE UserID = $1 AND GameID = $2", [userId, gameId]);

    if (existingItem.rows.length > 0) {
      console.log("Product is already in the shopping cart")
      // Update the quantity of the product in the shopping cart
      await pool.query("UPDATE shoppingcart SET Quantity = $1, Subtotal = $2 WHERE UserID = $3 AND GameID = $4", [quantity, quantity * existingItem.rows[0].price, userId, gameId]);
    } else {
      // Add the product to the shopping cart
      await pool.query("INSERT INTO shoppingcart (UserID, GameID, Quantity, Subtotal) VALUES ($1, $2, $3, $4)", [userId, gameId, quantity, quantity * existingItem.rows[0].price]);
    }
    res.status(201).json({ success: true, message: 'Added to shopping cart' });
  }
  catch (error) {
    console.error("Error occurred while adding to shopping cart:", error);
    res.status(500).json({ success: false, message: 'An error occurred while adding to shopping cart' });
  }

});

// Get shopping cart by user ID
app.get("/user/getCart/:userId", async (req, res) => {
  console.log("Receiving shopping cart request");

  const userId = parseInt(req.params.userId);

  try {
    // Retrieve the shopping cart items for the given user ID
    const shoppingCartItems = await pool.query("SELECT * FROM shoppingcart WHERE UserID = $1", [userId]);

    res.status(200).json({ success: true, shoppingCartItems: shoppingCartItems.rows });
  } catch (error) {
    console.error("Error occurred while retrieving shopping cart:", error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving shopping cart' });
  }
});

// Move products from shopping cart to order and update inventory quantity
app.post("/user/:userId/orderCart", async (req, res) => {
  console.log("Moving products from shopping cart to order");

  const userId = parseInt(req.params.userId);

  // Validate if userId is a valid integer
  if (isNaN(userId)) {
    res.status(400).json({ success: false, message: 'Invalid user ID' });
    return;
  }

  try {
    // Begin a transaction to perform the operations atomically
    await pool.query("BEGIN");

    // Retrieve the shopping cart items for the given user ID
    const shoppingCartItems = await pool.query("SELECT * FROM shoppingcart WHERE UserID = $1", [userId]);

    // Create a new order for the user
    const newOrder = await pool.query(
      "INSERT INTO \"Order\" (UserID, OrderDate, TotalAmount, Status) VALUES ($1, current_date, 0, 'Pending') RETURNING OrderID",
      [userId]
    );

    const orderId = newOrder.rows[0].orderid;

    // Move items from shopping cart to order items
    for (const item of shoppingCartItems.rows) {
      // Check if the product is in stock
      const product = await pool.query("SELECT Quantity FROM game WHERE GameID = $1", [item.gameid]);
      const quantityInStock = product.rows[0].quantity;

      if (quantityInStock >= item.quantity) {
        await pool.query(
          "INSERT INTO orderitem (OrderID, GameID, Quantity, Subtotal) VALUES ($1, $2, $3, $4)",
          [orderId, item.gameid, item.quantity, item.subtotal]
        );

        // Update the quantity of the product in the inventory
        await pool.query(
          "UPDATE game SET Quantity = Quantity - $1 WHERE GameID = $2",
          [item.quantity, item.gameid]
        );
      } else {
        // If the item is out of stock, rollback the transaction and send a response indicating the failure
        await pool.query("ROLLBACK");
        res.status(400).json({ success: false, message: `Product with ID ${item.gameid} is out of stock` });
        return;
      }
    }

    // Delete the shopping cart items for the user
    await pool.query("DELETE FROM shoppingcart WHERE UserID = $1", [userId]);

    // Commit the transaction
    await pool.query("COMMIT");

    res.status(200).json({ success: true, message: 'Products moved to order successfully' });
  } catch (error) {
    // Rollback the transaction in case of an error
    await pool.query("ROLLBACK");

    console.error("Error occurred while moving products to order:", error);
    res.status(500).json({ success: false, message: 'An error occurred while moving products to order' });
  }
});

// Define the route to retrieve all products in the inventory
app.get("/inventory/products", async (req, res) => {
  console.log("Retrieving all products in the inventory");

  try {
    // Retrieve all products in the inventory
    const products = await pool.query("SELECT * FROM game");

    res.status(200).json({ success: true, products: products.rows });
  } catch (error) {
    console.error("Error occurred while retrieving products:", error);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving products' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
