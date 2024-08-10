import { Button, Container } from "@chakra-ui/react";
import InvoiceHeader from "./InvoiceHeader";
import LineItemContainer from "./LineItemContainer";
import InvoiceNotes from "./InvoiceNotes";
import { useContext } from "react";
import { InvoiceContext } from "./InvoiceContext";

const InvoiceForm = () => {
  const { invoiceData } = useContext(InvoiceContext);
  const handleSubmit = async () => {
    console.log(invoiceData);
    return;

    // TODO: Test this
    // try {
    //   const response = await fetch("/your-api-endpoint", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(invoiceData),
    //   });

    //   if (response.ok) {
    //     // Handle successful submission
    //     console.log("Invoice submitted successfully!");
    //   } else {
    //     // Handle error
    //     console.error("Error submitting invoice:", response.statusText);
    //   }
    // } catch (error) {
    //   console.error("Error submitting invoice:", error);
    // }
  };

  return (
    <Container maxW={"container.lg"} margin={"auto"}>
      <InvoiceHeader />
      <LineItemContainer />
      <InvoiceNotes />
      <Button onClick={handleSubmit}>Submit Invoice</Button>
    </Container>
  );
};

export default InvoiceForm;
