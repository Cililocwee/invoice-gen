import { ChangeEvent, useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import HeaderSection from "./HeaderSection";
import LineItemsSection from "./LineItemsSection";
import SummarySection from "./SummarySection";
import DownloadButton from "../DownloadButton";
import { LineItem, InvoiceData } from "../../interfaces/interfaces";

const ConglomeratedForm = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
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
    amountPaid: 0,
    tax: 0,
    lineItems: [
      { id: uuidv4(), itemLabel: "", quantity: 1, rate: 0, itemTotal: 0 },
    ],
  });

  const handleChange =
    (field: keyof InvoiceData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInvoiceData({ ...invoiceData, [field]: event.target.value });
    };

  const handleLineItemChange =
    (id: string, field: keyof LineItem) => (value: string | number) => {
      setInvoiceData((prevData) => {
        const updatedLineItems = prevData.lineItems.map((item) => {
          if (item.id === id) {
            const updatedItem = { ...item, [field]: value };
            if (field === "quantity" || field === "rate") {
              updatedItem.itemTotal = updatedItem.quantity * updatedItem.rate;
            }
            return updatedItem;
          }
          return item;
        });
        return { ...prevData, lineItems: updatedLineItems };
      });
    };

  const addLineItem = () => {
    setInvoiceData({
      ...invoiceData,
      lineItems: [
        ...invoiceData.lineItems,
        { id: uuidv4(), itemLabel: "", quantity: 1, rate: 0, itemTotal: 0 },
      ],
    });
  };

  const removeLineItem = (id: string) => {
    if (invoiceData.lineItems.length > 1) {
      const updatedLineItems = invoiceData.lineItems.filter(
        (item) => item.id !== id
      );
      setInvoiceData({ ...invoiceData, lineItems: updatedLineItems });
    }
  };

  const subtotal = invoiceData.lineItems.reduce(
    (total, item) => total + item.itemTotal,
    0
  );

  return (
    <Container maxW={"container.lg"} margin={"auto"}>
      <Box p={4}>
        <HeaderSection invoiceData={invoiceData} handleChange={handleChange} />
      </Box>

      <LineItemsSection
        lineItems={invoiceData.lineItems}
        handleLineItemChange={handleLineItemChange}
        addLineItem={addLineItem}
        removeLineItem={removeLineItem}
      />

      <SummarySection
        invoiceData={invoiceData}
        handleChange={handleChange}
        subtotal={subtotal}
      />

      <Box display={"flex"} justifyContent={"center"} padding={"2em"}>
        <DownloadButton invoice={invoiceData} />
      </Box>
    </Container>
  );
};

export default ConglomeratedForm;
