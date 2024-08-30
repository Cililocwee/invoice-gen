const express = require("express");
const router = express.Router();
const https = require("https");

const generateInvoice = (invoice) => {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(invoice);
    const options = {
      hostname: "invoice-generator.com",
      port: 443,
      path: "/",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    let data = [];
    const req = https.request(options, (res) => {
      res
        .on("data", (chunk) => {
          data.push(chunk);
        })
        .on("end", () => {
          const buffer = Buffer.concat(data);
          resolve(buffer);
        });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.write(postData);
    req.end();
  });
};

router.get("/", async (req, res) => {
  res.send("Invoices endpoint");
});

router.post("/generate-invoice", async (req, res) => {
  try {
    const invoiceData = req.body;

    if (!invoiceData || typeof invoiceData !== "object") {
      return res.status(400).json({ error: "Invalid invoice data" });
    }

    console.log("Received Invoice Data:", invoiceData);

    const structuredInvoiceData = {
      from: invoiceData.from,
      to: invoiceData.billTo,
      date: invoiceData.date,
      due_date: invoiceData.dueDate,
      amount_paid: invoiceData.amountPaid,
      currency: "usd",
      number: invoiceData.invoiceNumber,
      payment_terms: invoiceData.paymentTerms,
      items: invoiceData.lineItems.map((item) => ({
        name: item.itemLabel,
        quantity: item.quantity,
        unit_cost: item.rate,
      })),
      fields: {
        tax: "%",
      },
      tax: invoiceData.tax,
      notes: invoiceData.notes,
      terms: invoiceData.terms,
    };

    const pdfBuffer = await generateInvoice(structuredInvoiceData);

    res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error handling invoice data:", error);
    res.status(500).json({ error: "An internal server error occurred" });
  }
});

module.exports = router;
