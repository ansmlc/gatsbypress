import React from "react"
import { 
    Box, 
    useColorModeValue 
} from "@chakra-ui/react"

const Card = ({ children, ...props }) => {
    return (
        <Box 
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="2xl" 
            {...props}
        >
            {children}
        </Box>
    )
}

export default Card
