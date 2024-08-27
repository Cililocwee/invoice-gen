import {
  Stack,
  Flex,
  Text,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
  Button,
  Grid,
  Box,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

interface LineItem {
  id: string;
  itemLabel: string;
  quantity: number;
  rate: number;
  itemTotal: number;
}

interface LineItemsSectionProps {
  lineItems: LineItem[];
  handleLineItemChange: (
    id: string,
    field: keyof LineItem
  ) => (value: string | number) => void;
  addLineItem: () => void;
  removeLineItem: (id: string) => void;
}

const LineItemsSection: React.FC<LineItemsSectionProps> = ({
  lineItems,
  handleLineItemChange,
  addLineItem,
  removeLineItem,
}) => {
  return (
    <Stack>
      <Grid
        bg="black"
        color="white"
        p={2}
        templateColumns="repeat(4, 1fr)"
        gap={6}
        textAlign={"center"}
      >
        <Text>Item</Text>
        <Text>Quantity</Text>
        <Text>Rate</Text>
        <Text>Amount</Text>
      </Grid>

      <Stack spacing={4}>
        {lineItems.map((item) => (
          <HStack key={item.id} alignItems="flex-start">
            <Flex direction="column" flex="1">
              <Grid
                templateColumns="1fr 1fr 1fr 0.5fr"
                alignItems={"center"}
                justifyItems={"end"}
                gap={".5em"}
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
                <Flex maxW={{ base: "3em", md: "6em" }}>
                  <Text>${item.itemTotal.toFixed(2)}</Text>
                </Flex>
              </Grid>
            </Flex>
            <IconButton
              aria-label="Delete Line Item"
              icon={<CloseIcon />}
              size={{ base: "xsm", md: "sm" }}
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
  );
};

export default LineItemsSection;
