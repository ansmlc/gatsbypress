import React from "react"
import { 
  Box, 
  Text } 
from "@chakra-ui/react"
import PageTitle from "./pageTitle"


const archiveTitle = ({ title, count}) => {
    return (
        <Box 
          w="100%" 
          pb={5}
        >
        <PageTitle 
          title={title} 
        />
        <Text 
          as="span"
          fontSize="sm"
          mb="1"
          textColor="gray"
        >
        {count + " posts"}
        </Text>
      </Box>
    )
}
export default archiveTitle
    