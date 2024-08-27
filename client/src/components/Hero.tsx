import { Stack, Flex, Button, Text, VStack } from "@chakra-ui/react";
import HeroImg from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Flex
      w={"full"}
      h={"30dvh"}
      backgroundImage={HeroImg}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={{ base: 4, md: 8 }}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} textAlign="center" spacing={6} maxWidth={"600px"}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            Quick and easy invoicing instantly
          </Text>
          <Flex justify={"center"}>
            <Button
              onClick={() => navigate("/about")}
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              About InvoiceGen
            </Button>
          </Flex>
        </Stack>
      </VStack>
    </Flex>
  );
}
