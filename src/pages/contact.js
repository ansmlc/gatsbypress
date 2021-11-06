import * as React from "react"
import {
    Box,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Text
  } from '@chakra-ui/react';
  import { BiEnvelope } from "@react-icons/all-files/bi/BiEnvelope"
  import { BiUser } from '@react-icons/all-files/bi/BiUser';
import Layout from "../components/layout";
import SEO from "../components/seo"
import Crumb from "../components/breadcrumbs.js"

  
export default function Component ()  {
    return (
<Layout>
    <SEO title="Contact"/>
    <Crumb otherContext="contact"/>
    <Text
        as="h1"
        fontWeight="bold"
        fontSize="2rem"
        marginTop="1rem"
        marginBottom="2"
        lineHeight="1.1"
    >
        Contact us
    </Text>
    <Box bg="white" borderRadius="2xl" maxW={{base: '100%', md: '50%'}}>
        <Box m={8} ml={0} color="#0B0E3F">
            <VStack spacing={5}>
            <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                    pointerEvents="none"
                    children={<BiUser color="gray.800" />}
                />
                <Input type="text" size="md" />
                </InputGroup>
            </FormControl>
            <FormControl id="name">
                <FormLabel>Mail</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                    pointerEvents="none"
                    children={<BiEnvelope color="gray.800" />}
                />
                <Input type="text" size="md" />
                </InputGroup>
            </FormControl>
            <FormControl id="name">
                <FormLabel>Message</FormLabel>
                <Textarea
                borderColor="gray.300"
                _hover={{
                    borderRadius: 'gray.300',
                }}
                placeholder="message"
                />
            </FormControl>
            <FormControl id="name" float="right">
                <Button
                variant="solid"
                bg="#0D74FF"
                color="white"
                _hover={{}}>
                Send Message
                </Button>
            </FormControl>
            </VStack>
        </Box>
    </Box>
    </Layout>
    );
  }
