import { DownloadIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { InvoiceData } from "../interfaces/interfaces";

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
          responseType: "blob",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "invoice.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error sending invoice data:", error);
    }
  };

  return (
    <Button
      backgroundColor={"green"}
      color={"white"}
      onClick={() => handlePing(invoice)}
    >
      <DownloadIcon />
      Download
    </Button>
  );
}
