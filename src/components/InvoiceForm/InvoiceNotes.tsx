import {
  HStack,
  VStack,
  Textarea,
  Text,
  Input,
  Button,
  useBoolean,
} from "@chakra-ui/react";
import { useContext } from "react";
import { InvoiceContext } from "./InvoiceContext";

function InvoiceNotes() {
  const { invoiceData, setInvoiceData } = useContext(InvoiceContext);
  const [isTaxPercent, setIsTaxPercent] = useBoolean(false);

  const toggleTaxType = () => {
    setIsTaxPercent.toggle();
  };

  const handleChange = (field) => (event) => {
    setInvoiceData({ ...invoiceData, [field]: event.target.value });
  };

  return (
    <VStack align="stretch" spacing={4}>
      {/* First HStack */}
      <HStack justifyContent="space-between">
        <VStack align="stretch" flex="1" pr={4}>
          <Textarea
            placeholder="Notes"
            value={invoiceData.notes}
            onChange={handleChange("notes")}
          />
        </VStack>
        <VStack align="flex-start">
          <Text>Subtotal: $200.00</Text>
          <HStack>
            <Text>Tax:</Text>
            <Input
              type={isTaxPercent ? "number" : "text"}
              value={isTaxPercent ? "" : "$"}
              onChange={(e) => {
                if (!isTaxPercent) {
                  e.target.value = "$" + e.target.value.replace(/\$/g, "");
                } else {
                  handleChange("tax")(e); // Update tax value in state
                }
              }}
            />
            <Button size="sm" onClick={toggleTaxType}>
              {isTaxPercent ? "$" : "%"}
            </Button>
          </HStack>
        </VStack>
      </HStack>

      {/* Second HStack */}
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
              onChange={(e) => {
                e.target.value = "$" + e.target.value.replace(/\$/g, "");
                handleChange("amountPaid")(e); // Update amountPaid in state
              }}
            />
          </HStack>
          <HStack>
            <Text>Balance Due:</Text>
            <Text>$200.00</Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default InvoiceNotes;
