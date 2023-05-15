const PORT = 3001;
const express = require("express");
const app = express();
const pool = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  try {
    const users = await pool.query(
      "SELECT * FROM users WHERE username = 'asdf'"
    );
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are valid.
  const user = await pool.query("SELECT * FROM users WHERE username = 'asdf'");

  console.log(user.rows[0].username);

  if (!user || user.rows[0].password !== password) {
    res.status(401).send("Invalid username or password");
    return;
  } else {
    res.status(200).send("Login successful");
    return;
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
