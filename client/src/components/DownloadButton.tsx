import { DownloadIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { InvoiceData } from "./InvoiceForm/ConglomeratedForm";

interface DownloadButtonProps {
  invoice: InvoiceData;
}

export default function DownloadButton({ invoice }: DownloadButtonProps) {
  const handlePing = async (invoice: InvoiceData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/generate-invoice",
        invoice,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending invoice data:", error);
    }
  };

  return (
    <Button
      backgroundColor={"green"}
      color={"white"}
      onClick={() => handlePing(invoice)} // Call the function on click
    >
      <DownloadIcon />
      Download
    </Button>
  );
}
