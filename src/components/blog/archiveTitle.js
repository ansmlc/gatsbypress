import React from "react"
import { 
  Box, 
  Text,
  Heading } 
from "@chakra-ui/react"


const archiveTitle = ({ title, count}) => {
    return (
        <Box 
          w="100%" 
          pb={5}
        >
        <Heading 
          as="h3"
          title={title} 
          fontSize="2xl"
          fontWeight="bold"
          color="gray.700"
          display="inline"

        >
          {title}
        </Heading>
        <Text 
          as="span"
          ml="2"
          textColor="gray"
        >
        {"(" + count + " posts)"}
        </Text>
      </Box>
    )
}

export default archiveTitle
    