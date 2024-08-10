import { VStack, HStack, Textarea, Text, Input } from "@chakra-ui/react";

interface SummarySectionProps {
  invoiceData: {
    notes: string;
    terms: string;
    tax: number;
    amountPaid: string;
  };
  handleChange: (
    field: keyof SummarySectionProps["invoiceData"]
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  subtotal: number;
}

const SummarySection: React.FC<SummarySectionProps> = ({
  invoiceData,
  handleChange,
  subtotal,
}) => {
  const taxAmount = (subtotal * invoiceData.tax || 0) / 100;
  const total = subtotal + taxAmount;
  const balanceDue = total - parseFloat(invoiceData.amountPaid) || 0;

  return (
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
              type="number"
              placeholder="e.g. 5"
              value={invoiceData.tax}
              onChange={handleChange("tax")}
            />
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
          <Text>Total: ${total.toFixed(2)}</Text>
          <HStack>
            <Text>Amount Paid:</Text>
            <Input
              type="number"
              value={invoiceData.amountPaid}
              onChange={handleChange("amountPaid")}
            />
          </HStack>
          <HStack>
            <Text>Balance Due:</Text>
            <Text>${balanceDue.toFixed(2)}</Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default SummarySection;
