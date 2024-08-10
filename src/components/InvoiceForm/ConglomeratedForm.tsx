import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Box,
  VStack,
  HStack,
  Text,
  Flex,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";

const ConglomeratedForm = () => {
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
    lineItems: [
      { id: uuidv4(), itemLabel: "", quantity: 0, rate: 0, itemTotal: 0 },
    ], // Initial line item
  });

  const handleChange = (field) => (event) => {
    setInvoiceData({ ...invoiceData, [field]: event.target.value });
  };

  const handleLineItemChange = (id, field) => (value) => {
    setInvoiceData((prevData) => {
      const updatedLineItems = prevData.lineItems.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          // Calculate itemTotal whenever quantity or rate changes
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
        { id: uuidv4(), itemLabel: "", quantity: 0, rate: 0, itemTotal: 0 },
      ],
    });
  };

  const removeLineItem = (id) => {
    if (invoiceData.lineItems.length > 1) {
      const updatedLineItems = invoiceData.lineItems.filter(
        (item) => item.id !== id
      );
      setInvoiceData({ ...invoiceData, lineItems: updatedLineItems });
    }
  };

  const handleSubmit = async () => {
    console.log(invoiceData);
    // TODO: Add API call logic here
  };

  const subtotal = invoiceData.lineItems.reduce(
    (total, item) => total + item.itemTotal,
    0
  );

  return (
    <Container maxW={"container.lg"} margin={"auto"}>
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

      <Stack>
        <Flex bg="black" color="white" p={2} justifyContent="space-between">
          <Text>Item</Text>
          <Text>Quantity</Text>
          <Text>Rate</Text>
          <Text>Amount</Text>
        </Flex>

        <Stack spacing={4}>
          {invoiceData.lineItems.map((item) => (
            <HStack key={item.id} alignItems="flex-start">
              <Flex direction="column" flex="1">
                <Flex
                  p={2}
                  alignItems="center"
                  justifyContent="space-between"
                  gap={"1em"}
                >
                  <Input
                    placeholder="Enter item"
                    onChange={(e) =>
                      handleLineItemChange(item.id, "itemLabel")(e.target.value)
                    }
                  />
                  <NumberInput
                    value={item.quantity}
                    onChange={handleLineItemChange(item.id, "quantity")}
                    min={0}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Input
                    placeholder="Enter rate"
                    type="number"
                    value={item.rate}
                    onChange={(e) =>
                      handleLineItemChange(
                        item.id,
                        "rate"
                      )(parseFloat(e.target.value) || 0)
                    }
                  />
                  <Text>${item.itemTotal.toFixed(2)}</Text>
                </Flex>
              </Flex>
              <IconButton
                aria-label="Delete Line Item"
                icon={<CloseIcon />}
                size="sm"
                colorScheme="red"
                margin={"auto"}
                onClick={() => removeLineItem(item.id)}
              />
            </HStack>
          ))}
        </Stack>

        <Flex justifyContent="center" p={4}>
          <Button colorScheme="green" onClick={addLineItem}>
            <AddIcon />
          </Button>
        </Flex>
      </Stack>

      <VStack align="stretch" spacing={4} p={4}>
        <HStack justifyContent="space-between">
          <VStack align="stretch" flex="1" pr={4}>
            <Textarea
              placeholder="Notes"
              value={invoiceData.notes}
              onChange={handleChange("notes")}
            />
          </VStack>
          <VStack align="flex-start">
            <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
            <HStack>
              <Text>Tax:</Text>
              <Input
                type="text"
                value={invoiceData.tax}
                onChange={handleChange("tax")}
              />
              <Button size="sm">%</Button>
            </HStack>
          </VStack>
        </HStack>

        <HStack justifyContent="space-between">
          <VStack align="stretch" flex="1" pr={4}>
            <Textarea
              placeholder="Terms"
              value={invoiceData.terms}
              onChange={handleChange("terms")}
            />
          </VStack>
          <VStack align="flex-start">
            <Text>Total: $200.00</Text>
            <HStack>
              <Text>Amount Paid:</Text>
              <Input
                type="text"
                value={invoiceData.amountPaid}
                onChange={handleChange("amountPaid")}
              />
            </HStack>
            <HStack>
              <Text>Balance Due:</Text>
              <Text>$200.00</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>

      <Button onClick={handleSubmit} colorScheme="blue" margin={4}>
        Submit Invoice
      </Button>
    </Container>
  );
};

export default ConglomeratedForm;
