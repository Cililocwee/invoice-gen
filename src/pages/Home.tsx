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
import InvoiceForm from "../components/InvoiceForm";
import { DownloadIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <div>
      <Hero />
      <HStack>
        <InvoiceForm />
        <VStack marginBottom={"auto"} padding={"2em 1em"}>
          <Button backgroundColor={"green"} color={"white"}>
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
    </div>
  );
}
