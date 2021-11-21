import * as React from "react"
import { 
  Box,
  Text,
  Flex,
  Spacer,
  Container,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react"
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"


function SlideFadeEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}>Click Me</Button>
        <SlideFade in={isOpen} offsetY="20px">
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Text>Lorem ipsum sonet virgot laren furtigous trantul lop</Text>
          </Box>
        </SlideFade>
      </>
    )
  }

  export default SlideFadeEx