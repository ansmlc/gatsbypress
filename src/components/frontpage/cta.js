import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "gatsby"
import PrimaryButton from "../buttons/primaryButton";

export default function Cta() {
  return (
    <Flex
      data-sal="slide-up" data-sal-duration={600}
      bg={useColorModeValue("white", "gray.700")}
      p={{ base: 8, md: 20 }}
      w="full"
      alignItems="center"
      justifyContent="center"
      rounded="2xl"
      shadow="lg"
    >
      <Box
        w="full"
        mx="auto"
        py={{ base: 4, lg: 8 }}
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
          mb={{ base: 6, md: 0}}
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
          alt="contact"         
          to={"/contact"} 
          key="contact"
        >
          <PrimaryButton arrowRight>
              Contact us
          </PrimaryButton>
        </Link>
        </Box>
      </Box>
    </Flex>
  );
}
