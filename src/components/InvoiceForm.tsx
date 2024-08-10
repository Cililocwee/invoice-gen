import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Container,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import InvoiceHeader from "./InvoiceHeader";
import LineItem from "./LineItem";
import LineItemContainer from "./LineItemContainer";

const InvoiceForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Container maxW={"container.lg"} margin={"auto"}>
      <InvoiceHeader />
      <LineItemContainer />
    </Container>
  );
};

export default InvoiceForm;
