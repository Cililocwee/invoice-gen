const app = require("../index.js");

app.get("/", (req, res) => {
  res.send("Blurb");
});

module.exports = app;
