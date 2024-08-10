import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InvoiceContext = createContext();

function InvoiceProvider({ children }) {
  const [invoiceData, setInvoiceData] = useState({
    from: "",
    billTo: "",
    shipTo: "",
    invoiceNumber: "",
    date: "",
    paymentTerms: "",
    dueDate: "",
    poNumber: "",
    notes: "",
    terms: "",
    amountPaid: "",
    lineItems: [{ id: uuidv4(), quantity: 0, rate: 0 }], // Initial line item
  });

  return (
    <InvoiceContext.Provider value={{ invoiceData, setInvoiceData }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContext, InvoiceProvider };
