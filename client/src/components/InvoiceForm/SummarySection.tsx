import { VStack, HStack, Textarea, Text, Input, Stack } from "@chakra-ui/react";

interface SummarySectionProps {
  invoiceData: {
    notes: string;
    terms: string;
    tax: number;
    amountPaid: number;
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
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <VStack align="stretch" flex="1" pb={2}>
          <Textarea
            maxW={"30em"}
            placeholder="Notes"
            value={invoiceData.notes}
            onChange={handleChange("notes")}
          />
        </VStack>
        <Stack
          align={{ base: "center", md: "flex-end" }}
          justify={{ base: "space-between" }}
          direction={{ base: "row", md: "column" }}
        >
          <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
          <HStack>
            <Text>Tax:</Text>
            <Input
              maxW={"5em"}
              type="number"
              placeholder="e.g. 5"
              value={invoiceData.tax}
              onChange={handleChange("tax")}
            />
            <Text>%</Text>
          </HStack>
        </Stack>
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <VStack align="stretch" flex="1" pb={2}>
          <Textarea
            maxW={"30em"}
            placeholder="Terms and Agreements"
            value={invoiceData.terms}
            onChange={handleChange("terms")}
          />
        </VStack>
        <Stack
          align={{ base: "center", md: "flex-end" }}
          justify={{ base: "space-between" }}
          direction={{ base: "row", md: "column" }}
        >
          {/* <Text>Total: ${total.toFixed(2)}</Text> */}
          <HStack>
            <Text>Amount Paid:</Text>
            <Input
              maxWidth={"5em"}
              type="number"
              value={invoiceData.amountPaid}
              onChange={handleChange("amountPaid")}
            />
          </HStack>
          <HStack>
            <Text>Balance Due:</Text>
            <Text>${balanceDue.toFixed(2)}</Text>
          </HStack>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default SummarySection;
