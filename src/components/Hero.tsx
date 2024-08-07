"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import HeroImg from "../assets/hero.jpg";

export default function Hero() {
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
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Quick and easy to use invoicing <br></br>available instantly
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              About This Site
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              New to Invoicing
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
