"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import About from "../pages/About";
import { Link } from "react-router-dom";
import HeaderIcon from "../assets/headericon.jpg";

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function ChakraNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <Link to={"/about"}>About</Link>
              <Link to={"/help"}>Help</Link>
              <Link to={"/invoicing-guide"}>Invoice Guide</Link>
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
