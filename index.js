const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("こんにちは");
});

app.post("/search", function (req, res) {
  console.log("こんにちは");
});

app.listen(3000, function () {
  console.log("Listening on localhost port 3000");
});
