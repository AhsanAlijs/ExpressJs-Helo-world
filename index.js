const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send(`User Login<h1>${process.env.USERNAMESFORREPO}</h1>`);
});
app.get("/home", (req, res) => {
  res.send("Men  home ");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
