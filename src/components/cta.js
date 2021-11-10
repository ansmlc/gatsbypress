import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";
import PrimaryButton from "./primaryButton";

export default function Cta() {
  return (
    <Flex
      data-sal="slide-up" data-sal-duration={600}
      bg={useColorModeValue("white", "gray.600")}
      p={{ base: 8, md: 20 }}
      w="full"
      alignItems="center"
      justifyContent="center"
      rounded="2xl"
      shadow="lg"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        w="full"
        mx="auto"
        py={{ base: 12, lg: 16 }}
        px={{ base: 4, lg: 8 }}
        display={{ lg: "flex" }}
        alignItems={{ lg: "center" }}
        justifyContent={{ lg: "space-around" }}
      >
        <Box 
          as="h3"
          fontSize={"4xl"}
          fontWeight="extrabold"
          lineHeight="shorter"
          color={useColorModeValue("gray.900", "gray.100")}
        >
            Want to learn more?
          <Box as="span"
            display="block"
            color={'brand.500'}
          >
            Send us a message...
          </Box>
        </Box>
        <Box>
        <Link             
          to="/contact" 
          key="contact">
          <PrimaryButton arrowRight>
              Contact us
          </PrimaryButton>
        </Link>
        </Box>
      </Box>
    </Flex>
  );
}
