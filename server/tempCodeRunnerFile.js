const PORT = 3001;
const express = require("express");
const app = express();
const pool = require("./db");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// Login
app.post("/login", async (req, res) => {
  console.log("Receiving login request");
  const { email, password } = req.body;

  try {
    // Check if the email and password are valid
    const user = await pool.query("SELECT * FROM \"User\" WHERE email = $1", [email]);

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
app.post("/signup", async (req, res) => {
  console.log("Receiving signup request");
  const { firstName, lastName, email, password, phoneNo } = req.body;

  try {
    // Check if the email is already taken
    const existingEmail = await pool.query("SELECT * FROM \"User\" WHERE email = $1", [email]);
    if (existingEmail.rows.length > 0) {
      console.log("Email is already taken");
      res.status(409).json({ success: false, message: 'Email is already taken' });
      return;
    }

    // Check if the phone number is already taken
    const existingPhone = await pool.query("SELECT * FROM \"User\" WHERE phoneNo = $1", [phoneNo]);
    if (existingPhone.rows.length > 0) {
      res.status(409).json({ success: false, message: 'Phone number is already taken' });
      return;
    }

    // Create a new user
    const newUser = await pool.query("INSERT INTO \"User\" (firstName, lastName, email, password, phoneNo) VALUES ($1, $2, $3, $4, $5) RETURNING *", [firstName, lastName, email, password, phoneNo]);

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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
