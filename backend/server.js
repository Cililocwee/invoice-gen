const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();

// Middleware
app.use(cors());
app.use(helmet()); // Adds security-related headers to responses
app.use(morgan("combined")); // Logs incoming requests
app.use(express.json()); // Automatically parse JSON bodies

// Basic route for health check
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

// Endpoint to receive and log invoice data
app.post("/generate-invoice", (req, res) => {
  try {
    const invoiceData = req.body;

    if (!invoiceData || typeof invoiceData !== "object") {
      return res.status(400).json({ error: "Invalid invoice data" });
    }

    // Log the received invoice data to the console
    console.log("Received Invoice Data:", invoiceData);

    // Send a response back to the frontend
    res.status(200).send("Invoice data received successfully");
  } catch (error) {
    console.error("Error handling invoice data:", error);
    res.status(500).json({ error: "An internal server error occurred" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
