import React from "react"
import { 
  Text } 
from "@chakra-ui/react"

const PageTitle = ({ title }) => {
    return (
        <Text
        as="h1"
        fontWeight="bold"
        fontSize="2rem"
        pb={2}
        lineHeight="1.1"
      >
        {title}
      </Text>
    )
}
export default PageTitle
    