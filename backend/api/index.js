const app = require("../index.js");

const invoices = require("../routes/invoiceRouter.js");

app.use("/api/invoices", invoices);

module.exports = app;
