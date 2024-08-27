import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { Link } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex justify={"center"} p={{ base: 1, md: 5 }}>
      <VStack spacing={6} align="start" p={6} maxWidth={"900px"}>
        <Heading as="h1" size="xl">
          What is InvoiceGen?
        </Heading>
        <Text fontSize="lg">
          InvoiceGen is a really simple website for generating invoices on the
          fly. It doesn’t really have a lot of bells and whistles, but it’s
          meant to be simple and intuitive.
        </Text>
        <Text fontSize="lg">
          It uses the Invoice-Generator.com API on the backend. You can find
          more information about this API on their{" "}
          <Link
            href="https://invoice-generator.com/developer"
            isExternal
            color={"teal.500"}
          >
            developer page <ExternalLinkIcon mx={"2px"} />
          </Link>
          .
        </Text>
        <Divider />
        <Heading as="h2" size="lg">
          Why’d I make InvoiceGen?
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Because I tend to make a lot of one-off invoices here and there and I
          wanted something that fit exactly my use case. There are tons of
          invoice generators out there that have too many options or, simply, I
          didn’t like the interface.
        </Text>
        <Text fontSize="lg" color="gray.600">
          InvoiceGen started as a personal project/tool I used for my own needs.
          It's evolved into something else entirely now and I hope you find some
          use for it!
        </Text>
        <Divider />
        <Heading as="h2" size="lg">
          Support
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Something happen that you didn't like? Got an idea how to make the
          interface better?
        </Text>
        <Text fontSize="lg" color="gray.600">
          I'd love to hear your ideas to make InvoiceGen more useful.
        </Text>
        <Text fontSize="lg" color="gray.600">
          Github is the best place to contact me! You can{" "}
          <Link
            href="https://github.com/Cililocwee/invoice-gen/issues"
            isExternal
            color={"teal.500"}
          >
            create an issue <ExternalLinkIcon />
          </Link>{" "}
          on Github to request new features or if you run into any issues.
        </Text>
      </VStack>
    </Flex>
  );
}
