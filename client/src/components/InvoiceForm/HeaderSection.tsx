import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  HStack,
  VStack,
  Stack,
} from "@chakra-ui/react";

interface HeaderSectionProps {
  invoiceData: {
    from: string;
    billTo: string;
    shipTo: string;
    invoiceNumber: string;
    date: string;
    paymentTerms: string;
    dueDate: string;
    poNumber: string;
  };
  handleChange: (
    field: keyof HeaderSectionProps["invoiceData"]
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  invoiceData,
  handleChange,
}) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justifyContent={"space-between"}
    >
      <VStack marginTop={"auto"}>
        <FormControl id="invoiceNumber">
          <FormLabel>Invoice #</FormLabel>
          <Input
            width={"8em"}
            type="text"
            value={invoiceData.invoiceNumber}
            onChange={handleChange("invoiceNumber")}
          />
        </FormControl>
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
    </Stack>
  );
};

export default HeaderSection;
