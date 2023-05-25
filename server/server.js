const PORT = 3001;
const express = require("express");
const app = express();
const pool = require("./db");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

//login
app.post("/login", async (req, res) => {
  console.log("Boop beep receiving login request")
  const { email, password } = req.body;

  console.log("username: ", email, "password: ", password)
  // Check if the username and password are valid.
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
 


  if (!user || user.rows.length === 0 || user.rows[0].password !== password) {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  } else {
    res.status(200).json({ success: true, message: 'Login successful' });
  }
});

app.post("/register", async (req, res) => {
  console.log("Receiving registration request");
  const {firstName, lastName, email, password, phoneNo } = req.body;

  // Check if the username is already taken
  const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  if (existingUser.rows.length > 0) {
    res.status(409).json({ success: false, message: 'email is already taken' });
    return;
  }

  // Create a new user
  const newUser = await pool.query("INSERT INTO users (firstName, lastName, email, password, phoneNo) VALUES ($1, $2, $3, $4, $5) RETURNING *", [firstName, lastName ,email, password, phoneNo]);

  if (newUser) {
    res.status(201).json({ success: true, message: 'Account created successfully' });
  } else {
    res.status(500).json({ success: false, message: 'Failed to create account' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
