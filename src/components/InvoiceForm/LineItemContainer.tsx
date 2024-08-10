import { useContext, useState } from "react";
import {
  Button,
  Flex,
  Stack,
  IconButton,
  HStack,
  Text,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";
import LineItem from "./LineItem";
import { InvoiceContext } from "./InvoiceContext";

function LineItemContainer() {
  const [lineItems, setLineItems] = useState([{ id: uuidv4() }]); // Initial LineItem with UUID
  const { invoiceData, setInvoiceData } = useContext(InvoiceContext);
  const addLineItem = () => {
    setInvoiceData({
      ...invoiceData,
      lineItems: [
        ...invoiceData.lineItems,
        { id: uuidv4(), quantity: 0, rate: 0 },
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

  return (
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
            <LineItem />
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

        <Flex justifyContent="center">
          <Button
            leftIcon={<AddIcon />}
            colorScheme="green"
            onClick={addLineItem}
          >
            Add Line Item
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default LineItemContainer;
