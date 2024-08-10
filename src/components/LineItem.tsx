import { useState } from "react";
import {
  Flex,
  Text,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function LineItem() {
  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(0);

  const handleQuantityChange = (valueString) => {
    const value = parseInt(valueString);
    setQuantity(value);
  };

  const handleRateChange = (event) => {
    const value = parseFloat(event.target.value);
    setRate(value);
  };

  const amount = quantity * rate;

  return (
    <Flex direction="column">
      <Flex
        p={2}
        alignItems="center"
        justifyContent="space-between"
        gap={"1em"}
      >
        <Input placeholder="Enter item" />
        <NumberInput value={quantity} onChange={handleQuantityChange} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Input
          placeholder="Enter rate"
          type="number"
          value={rate}
          onChange={handleRateChange}
        />
        <Text> ${amount.toFixed(2)} </Text>
      </Flex>
    </Flex>
  );
}

export default LineItem;
