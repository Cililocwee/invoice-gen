const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const https = require("https");
const fs = require("fs");

require("dotenv").config();
const apiKey = process.env.API_KEY;

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

    // !! UNSTABLE TEST
    function generateInvoice(invoice, filename, success, error) {
      const postData = JSON.stringify(invoice);
      const options = {
        hostname: "invoice-generator.com",
        port: 443,
        path: "/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(postData),
        },
      };

      const file = fs.createWriteStream(filename);

      const req = https.request(options, function (res) {
        res
          .on("data", function (chunk) {
            file.write(chunk);
          })
          .on("end", function () {
            file.end();

            if (typeof success === "function") {
              success();
            }
          });
      });
      req.write(postData);
      req.end();

      if (typeof error === "function") {
        req.on("error", error);
      }
    }

    const testInvoice = {
      from: "Nikolaus Ltd\n123 Main St\nAustin, TX 78701",
      to: "Acme, Corp.\n456 Main St\nAustin, TX 78701",
      currency: "usd",
      number: "INV-0001",
      payment_terms: "Auto-Billed - Do Not Pay",
      items: [
        {
          name: "Starter plan monthly",
          quantity: 1,
          unit_cost: 99,
        },
      ],
      fields: {
        tax: "%",
      },
      tax: 5,
      notes: "Thanks for being an awesome customer!",
      terms:
        "No need to submit payment. You will be auto-billed for this invoice.",
    };

    // !! Using testInvoice, should switch to invoiceData
    generateInvoice(
      testInvoice,
      "invoice.pdf",
      function () {
        console.log("Saved invoice to invoice.pdf");
      },
      function (err) {
        console.error(err);
      }
    );

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
