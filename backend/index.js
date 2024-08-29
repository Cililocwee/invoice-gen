const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { createServer } = require("http");

require("dotenv").config();

//Routers
const invoices = require("./routes/invoiceRouter");

// middelware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
  })
);
app.options("*", cors());

app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());

app.use("/invoices", invoices);

app.get("/", (req, res) => {
  res.send("Server is running");
  res.json({ message: "Server is running" });
});

module.exports = app;

if (process.env.NODE_ENV !== "production") {
  const server = createServer(app);
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
