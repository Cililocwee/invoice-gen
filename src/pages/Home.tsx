import {
  Button,
  Card,
  Divider,
  HStack,
  Select,
  VStack,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import { DownloadIcon } from "@chakra-ui/icons";

import ConglomeratedForm from "../components/InvoiceForm/ConglomeratedForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <Card padding={"5em"}>
        <HStack maxW={"900px"} margin={"auto"}>
          <ConglomeratedForm />

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
