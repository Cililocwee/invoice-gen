import {
  Box,
  Button,
  Card,
  Divider,
  HStack,
  Icon,
  Select,
  VStack,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import InvoiceForm from "../components/InvoiceForm/InvoiceForm";
import { DownloadIcon } from "@chakra-ui/icons";
import { InvoiceProvider } from "../components/InvoiceForm/InvoiceContext";

export default function Home() {
  return (
    <div>
      <Hero />
      <Card padding={"5em"}>
        <HStack maxW={"900px"} margin={"auto"}>
          <InvoiceProvider>
            <InvoiceForm />
          </InvoiceProvider>

          <VStack
            marginBottom={"auto"}
            padding={"2em"}
            borderLeft={"1px solid gray"}
          >
            <Button
              backgroundColor={"green"}
              color={"white"}
              onClick={() => alert("Unimplemented")}
            >
              <DownloadIcon />
              Download
            </Button>
            <Divider margin={"1em 0"} />
            <Select>
              <option value="usd">$ USD</option>
              <option value="vnd">₫ VND </option>
              <option value="jpy">¥ JPY</option>
            </Select>
          </VStack>
        </HStack>
      </Card>
    </div>
  );
}
