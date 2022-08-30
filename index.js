const express = require("express");

const app = express();

const todos = [];

app.get("/todos", (req, res) => {
  return res.json(todos);
});

app.post("todos");

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
