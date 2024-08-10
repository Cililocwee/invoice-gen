import { useState } from "react";
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

function LineItemContainer() {
  const [lineItems, setLineItems] = useState([{ id: uuidv4() }]); // Initial LineItem with UUID

  const addLineItem = () => {
    setLineItems([...lineItems, { id: uuidv4() }]);
  };

  const removeLineItem = (id) => {
    if (lineItems.length > 1) {
      const updatedLineItems = lineItems.filter((item) => item.id !== id);
      setLineItems(updatedLineItems);
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
        {lineItems.map((item) => (
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
