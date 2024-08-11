import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
  VStack,
  HStack,
  Divider,
  Alert,
  AlertIcon,
  Badge,
  Button,
  Icon,
} from "@chakra-ui/react";
import { CheckCircleIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const InvoicingGuide = () => {
  return (
    <Container maxW="container.lg" py={8}>
      {/* Hero Section */}
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4}>
          Simple Guide to Invoicing with InvoiceGen
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Learn how to streamline your invoicing process using InvoiceGen, the
          free online invoice generator designed for freelancers.
        </Text>
      </Box>

      <Divider mb={8} />

      {/* Section 1: Understanding the Basics of Invoicing */}
      <VStack align="start" spacing={5} mb={10}>
        <Heading as="h2" size="lg">
          1. Understanding the Basics of Invoicing
        </Heading>
        <Text>
          A well-crafted invoice should include the following elements:
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Your Details:</strong> Business name (if applicable), your
            full name, contact information, and address.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Client’s Details:</strong> Client’s name, business name (if
            applicable), contact information, and address.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Invoice Number:</strong> A unique identifier for the
            invoice, which helps both you and your client keep track of
            payments.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Date:</strong> The date the invoice is issued.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Payment Terms:</strong> Specify payment due date and
            preferred payment methods.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Description of Services:</strong> A clear breakdown of
            services or products provided, including quantities and rates.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Total Amount Due:</strong> Sum of all items, including taxes
            if applicable.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Notes:</strong> Any additional information, such as late
            fees or special terms.
          </ListItem>
        </List>
      </VStack>

      <Divider mb={8} />

      {/* Section 2: Signing Up for InvoiceGen */}
      <VStack align="start" spacing={5} mb={10}>
        <Heading as="h2" size="lg">
          2. Signing Up for InvoiceGen
        </Heading>
        <Text>
          To start using InvoiceGen, you’ll need to sign up for an account:
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Visit the InvoiceGen Website:</strong> Go to{" "}
            <a
              href="https://www.invoicegen.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3182ce" }}
            >
              InvoiceGen
            </a>
            .
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Sign Up:</strong> Click on the "Sign Up" button. Enter your
            email address and create a password. Verify your email address by
            clicking on the link sent to your inbox.
          </ListItem>
        </List>
      </VStack>

      <Divider mb={8} />

      {/* Section 3: Creating Your First Invoice */}
      <VStack align="start" spacing={5} mb={10}>
        <Heading as="h2" size="lg">
          3. Creating Your First Invoice
        </Heading>
        <Text>
          Once you have your account set up, you can start creating invoices:
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Log In:</strong> Go to{" "}
            <a
              href="https://www.invoicegen.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3182ce" }}
            >
              InvoiceGen
            </a>{" "}
            and log in with your email and password.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Navigate to the Dashboard:</strong> From the dashboard,
            click on “Create Invoice.”
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Enter Your Business Details:</strong> Fill in your business
            name, contact information, and logo (if available). If you
            frequently invoice the same clients, save these details for future
            use.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Add Client Information:</strong> Enter your client’s
            details, including name, address, and contact information. Ensure
            that the information is accurate to avoid payment delays.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Set Invoice Number and Date:</strong> InvoiceGen will
            automatically generate a unique invoice number, but you can
            customize it if necessary. Enter the invoice issue date, and specify
            the payment due date.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>List Services and Rates:</strong> Click “Add Item” to list
            each service or product provided. Include a brief description,
            quantity, rate, and total for each item.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Add Taxes and Discounts:</strong> If applicable, add taxes
            or discounts to the total amount. InvoiceGen provides options to
            apply percentages or fixed amounts.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Review and Save:</strong> Double-check all entered
            information for accuracy. Click “Save” to draft your invoice or
            “Send” to deliver it directly to your client via email.
          </ListItem>
        </List>
      </VStack>

      <Divider mb={8} />

      {/* Section 4: Customizing Your Invoice */}
      <VStack align="start" spacing={5} mb={10}>
        <Heading as="h2" size="lg">
          4. Customizing Your Invoice
        </Heading>
        <Text>
          InvoiceGen allows you to personalize your invoice to align with your
          brand:
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Add a Logo:</strong> Upload your business logo for a
            professional touch.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Choose a Template:</strong> Select from various templates
            and color schemes that best match your style.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Customize Layout:</strong> Rearrange fields and add custom
            notes to enhance clarity.
          </ListItem>
        </List>
      </VStack>

      <Divider mb={8} />

      {/* Section 5: Sending and Tracking Invoices */}
      <VStack align="start" spacing={5} mb={10}>
        <Heading as="h2" size="lg">
          5. Sending and Tracking Invoices
        </Heading>
        <Text>
          Once your invoice is ready, you can send it to your client and keep
          track of payments:
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Send Invoice:</strong> Use the “Send” button to email the
            invoice directly from InvoiceGen. You can also download it as a PDF
            and send it manually.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Track Payments:</strong> Access the “Invoices” tab to
            monitor the status of each invoice (e.g., sent, viewed, paid,
            overdue). Set up reminders for unpaid invoices to ensure timely
            follow-up.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Receive Payments:</strong> Specify preferred payment methods
            in your invoice (e.g., bank transfer, PayPal). Use InvoiceGen’s
            payment tracking feature to confirm receipt and log payments.
          </ListItem>
        </List>
      </VStack>

      <Divider mb={8} />

      {/* Section 6: Managing Your Invoices */}
      <VStack align="start" spacing={5} mb={10}>
        <Heading as="h2" size="lg">
          6. Managing Your Invoices
        </Heading>
        <Text>
          InvoiceGen offers additional features to help you manage your
          invoicing efficiently:
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Recurring Invoices:</strong> Automate recurring invoices for
            regular clients by setting up schedules.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Expense Tracking:</strong> Log expenses related to your
            projects and include them in your invoices if needed.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Financial Reports:</strong> Generate financial reports to
            analyze your earnings and expenses over time.
          </ListItem>
        </List>
      </VStack>

      <Divider mb={8} />

      {/* Section 7: Tips for Effective Invoicing */}
      <VStack align="start" spacing={5} mb={10}>
        <Heading as="h2" size="lg">
          7. Tips for Effective Invoicing
        </Heading>
        <Alert status="info" variant="left-accent" mb={4}>
          <AlertIcon />
          Here are some best practices to ensure your invoicing process is
          seamless:
        </Alert>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={InfoOutlineIcon} color="blue.500" />
            <strong>Be Prompt:</strong> Send invoices immediately after project
            completion to encourage faster payments.
          </ListItem>
          <ListItem>
            <ListIcon as={InfoOutlineIcon} color="blue.500" />
            <strong>Clear Payment Terms:</strong> Clearly state payment terms,
            including due dates and late fees, to avoid confusion.
          </ListItem>
          <ListItem>
            <ListIcon as={InfoOutlineIcon} color="blue.500" />
            <strong>Professional Communication:</strong> Maintain a professional
            tone in your invoices and follow-ups.
          </ListItem>
          <ListItem>
            <ListIcon as={InfoOutlineIcon} color="blue.500" />
            <strong>Consistent Branding:</strong> Use consistent branding
            elements (e.g., logo, color scheme) to establish credibility.
          </ListItem>
          <ListItem>
            <ListIcon as={InfoOutlineIcon} color="blue.500" />
            <strong>Keep Records:</strong> Maintain a record of all invoices for
            future reference and tax purposes.
          </ListItem>
        </List>
      </VStack>

      <Divider mb={8} />

      {/* Conclusion */}
      <Box textAlign="center" mt={10}>
        <Heading as="h2" size="lg" mb={4}>
          Conclusion
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          Using <strong>InvoiceGen</strong> simplifies the invoicing process for
          freelancers, helping you save time and maintain a professional image.
          By following this guide, you’ll be able to create, customize, and
          manage invoices effectively, ensuring you get paid on time and keep
          your freelance business running smoothly.
        </Text>
        <Box
          backgroundColor={"green"}
          width={"fit-content"}
          margin={"auto"}
          padding={".5em 1em"}
          borderRadius={".5em"}
          color={"white"}
        >
          <Link to={"/"}>Get Started with InvoiceGen</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default InvoicingGuide;
