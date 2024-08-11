import { Card, Divider, HStack, Select, VStack } from "@chakra-ui/react";
import Hero from "../components/Hero.js";

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
            {/* <DownloadButton /> */}
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
