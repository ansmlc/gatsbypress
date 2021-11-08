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
      bg={useColorModeValue("white", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      rounded="2xl"
      shadow="lg"
    >
        <Box bg={useColorModeValue("white", "gray.800")}>
            <Box
            maxW="7xl"
            w={{ md: "3xl", lg: "4xl" }}
            mx="auto"
            py={{ base: 12, lg: 16 }}
            px={{ base: 4, lg: 8 }}
            display={{ lg: "flex" }}
            alignItems={{ lg: "center" }}
            justifyContent={{ lg: "space-between" }}
            >
            <Box 
                as="h2"
                fontSize={{ base: "3xl", sm: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                lineHeight="shorter"
                color={useColorModeValue("gray.900", "gray.100")}
            >
                <Box as="span" display="block">Want to learn more?</Box>
                <Box as="span"
                display="block"
                color={useColorModeValue("brand.600", "gray.500")}
                >
                Send us a message now.
                </Box>
            </Box>
            <Stack
                direction={{ base: "column", sm: "row" }}
                mt={{ base: 8, lg: 0 }}
                shrink={{ lg: 0 }}
            >
            <PrimaryButton arrowRight>
                Contact us
            </PrimaryButton>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
