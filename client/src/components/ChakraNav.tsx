"use client";

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import HeaderIcon from "../assets/headericon.jpg";

export default function ChakraNav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to={"/"}>
              <Image src={HeaderIcon} height={"50px"} objectFit={"contain"} />
            </Link>
          </Box>
          <Box>
            <HStack>
              {/* <Link to={"/about"}>About</Link>
              <Link to={"/help"}>Help</Link>
              <Link to={"/invoicing-guide"}>Invoice Guide</Link> */}
            </HStack>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <HStack>
                <Button>Sign In</Button>
                <Button variant={"inverted"}>Sign Up</Button>
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
