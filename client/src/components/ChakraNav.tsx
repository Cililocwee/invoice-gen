import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
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
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Box>
    </>
  );
}
