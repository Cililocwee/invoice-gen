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

function InvoiceHeader() {
  return (
    <Box p={4}>
      <HStack spacing={4}>
        <VStack marginTop={"auto"}>
          <FormControl id="from">
            <FormLabel>From</FormLabel>
            <Textarea size={"sm"} placeholder="Who is this from?" />
          </FormControl>

          <HStack>
            <FormControl id="billTo">
              <FormLabel>Bill To</FormLabel>
              <Textarea size={"sm"} placeholder="Who is this to?" />
            </FormControl>

            <FormControl id="shipTo">
              <FormLabel>Ship To</FormLabel>
              <Textarea size={"sm"} placeholder="(Optional)" />
            </FormControl>
          </HStack>
        </VStack>

        <VStack>
          <FormControl id="invoiceNumber">
            <FormLabel>Invoice #</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="date">
            <FormLabel>Date</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl id="paymentTerms">
            <FormLabel>Payment Terms</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="dueDate">
            <FormLabel>Due Date</FormLabel>
            <Input type="date" />
          </FormControl>

          <FormControl id="poNumber">
            <FormLabel>PO Number</FormLabel>
            <Input type="text" />
          </FormControl>
        </VStack>
      </HStack>
    </Box>
  );
}

export default InvoiceHeader;
