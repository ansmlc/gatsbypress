import * as React from "react"
import MenuItems from "./menuItems";
import MenuToggle from "./menuToggle";
import { 
  Box,
  Flex,
  Container,
  Image,
  useColorModeValue
} from "@chakra-ui/react"
import Logo from "./logo"


const Nav = function ({ data })  {
  const items = data?.allWpMenu?.nodes[0]?.menuItems?.nodes
  console.log(items, 'menu items from navjs')
  const title = data?.wp?.allSettings?.generalSettingsTitle
  const logoMediaItem = data?.allFile?.edges[0]?.node
  console.log(logoMediaItem, 'logoMediaItem')
  console.log(items, 'items')
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
    return (
      <Box 
      bg={{base: isOpen? "white" : "gray.50", md: "gray.50"}}
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
          <MenuItems items={items} isOpen={isOpen}></MenuItems>
        </Flex>
        </Container>
      </Box>
    )
}

export default Nav
