import {
  Button,
  Card,
  Divider,
  HStack,
  Select,
  VStack,
} from "@chakra-ui/react";
import Hero from "../components/Hero.js";
import { DownloadIcon } from "@chakra-ui/icons";
import { invoice as FakeInvoice } from "../functions/sendInvoice.js";

import ConglomeratedForm from "../components/InvoiceForm/ConglomeratedForm.js";
import DownloadButton from "../components/DownloadButton.js";

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
            {/* <Button
              backgroundColor={"green"}
              color={"white"}
              onClick={() => generateInvoice(invoice)}
            >
              <DownloadIcon />
              Download
            </Button> */}
            <DownloadButton invoice={FakeInvoice} />
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
