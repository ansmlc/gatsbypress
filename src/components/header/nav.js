import * as React from "react"
import { 
  Box,
  Flex,
  Container,
  useColorModeValue,
  useColorMode,
  Button
} from "@chakra-ui/react"
import MenuItems from "./menuItems";
import MenuToggle from "./menuToggle";
import Logo from "./logo"


const Nav = function ({ data })  {
  const items = data?.allWpMenu?.nodes[0]?.menuItems?.nodes
  const title = data?.wp?.allSettings?.generalSettingsTitle
  const logoMediaItem = data?.allFile?.edges[0]?.node
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { colorMode, toggleColorMode } = useColorMode()
  const isOpenColorMode = useColorModeValue('white', 'gray.700')
  const isClosedColorMode = useColorModeValue('gray.50', 'gray.800')
    return (
      <Box 
        bg={{base: isOpen? isOpenColorMode : isClosedColorMode, md: isClosedColorMode}}
        borderBottomLeftRadius={{ base: '2xl', md: '0'}}
        borderBottomRightRadius={{ base: '2xl', md: '0'}}
        // bg={useColorModeValue('gray.50', 'gray.700')}
        color={useColorModeValue('gray.700', 'gray.200')}
        boxShadow={{base: isOpen? "lg" : "none", md: "none"}}
        as="header" 
        d="flex" 
        left="0" 
        right="0" 
        zIndex="2"
      >
        <Container maxW="container.lg">
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            h="100%"
            w="100%"
            py={4}
          >
            <Logo
              siteTitle={title}
              siteLogo={logoMediaItem}
            />            
            <MenuToggle toggle={toggle} isOpen={isOpen} />  
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            <MenuItems items={items} isOpen={isOpen}></MenuItems>
          </Flex>
        </Container>
      </Box>
    )
}

export default Nav
