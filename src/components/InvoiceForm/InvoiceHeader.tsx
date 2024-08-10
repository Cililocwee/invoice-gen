import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  FormHelperText,
  Box,
  VStack,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { InvoiceContext } from "./InvoiceContext";
import { useContext } from "react";

function InvoiceHeader() {
  const { invoiceData, setInvoiceData } = useContext(InvoiceContext);
  const handleChange = (field) => (event) => {
    setInvoiceData({ ...invoiceData, [field]: event.target.value });
  };

  return (
    <Box p={4}>
      <HStack spacing={4}>
        <VStack marginTop={"auto"}>
          <FormControl id="from">
            <FormLabel>From</FormLabel>
            <Textarea
              size={"sm"}
              placeholder="Who is this from?"
              value={invoiceData.from}
              onChange={handleChange("from")}
            />
          </FormControl>

          <HStack>
            <FormControl id="billTo">
              <FormLabel>Bill To</FormLabel>
              <Textarea
                size={"sm"}
                placeholder="Who is this to?"
                value={invoiceData.billTo}
                onChange={handleChange("billTo")}
              />
            </FormControl>

            <FormControl id="shipTo">
              <FormLabel>Ship To</FormLabel>
              <Textarea
                size={"sm"}
                placeholder="(Optional)"
                value={invoiceData.shipTo}
                onChange={handleChange("shipTo")}
              />
            </FormControl>
          </HStack>
        </VStack>

        <VStack>
          <FormControl id="invoiceNumber">
            <FormLabel>Invoice #</FormLabel>
            <Input
              type="text"
              value={invoiceData.invoiceNumber}
              onChange={handleChange("invoiceNumber")}
            />
          </FormControl>

          <FormControl id="date">
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={invoiceData.date}
              onChange={handleChange("date")}
            />
          </FormControl>

          <FormControl id="paymentTerms">
            <FormLabel>Payment Terms</FormLabel>
            <Input
              type="text"
              value={invoiceData.paymentTerms}
              onChange={handleChange("paymentTerms")}
            />
          </FormControl>

          <FormControl id="dueDate">
            <FormLabel>Due Date</FormLabel>
            <Input
              type="date"
              value={invoiceData.dueDate}
              onChange={handleChange("dueDate")}
            />
          </FormControl>

          <FormControl id="poNumber">
            <FormLabel>PO Number</FormLabel>
            <Input
              type="text"
              value={invoiceData.poNumber}
              onChange={handleChange("poNumber")}
            />
          </FormControl>
        </VStack>
      </HStack>
    </Box>
  );
}

export default InvoiceHeader;
