import { Card, HStack } from "@chakra-ui/react";
import Hero from "../components/Hero.js";

import ConglomeratedForm from "../components/InvoiceForm/ConglomeratedForm.js";

export default function Home() {
  return (
    <div>
      <Hero />
      <Card padding={".5em"} marginTop={{ base: "1em", md: "3em" }}>
        <HStack maxW={"900px"} margin={"auto"}>
          <ConglomeratedForm />
        </HStack>
      </Card>
    </div>
  );
}
