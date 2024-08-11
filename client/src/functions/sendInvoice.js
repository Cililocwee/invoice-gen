export function generateInvoice(invoice, filename) {
  const postData = JSON.stringify(invoice);

  fetch("https://invoice-generator.com/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_INVOICE_API}`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData), // You'll need to find a way to calculate this on the frontend
    },
    body: postData,
    mode: "no-cors",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob(); // Get the PDF data as a Blob
    })
    .then((blob) => {
      // Create a temporary URL for the Blob, so the user can download it
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Error generating invoice:", error);
    });
}

export const invoice = {
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
  terms: "No need to submit payment. You will be auto-billed for this invoice.",
};

// generateInvoice(invoice);
