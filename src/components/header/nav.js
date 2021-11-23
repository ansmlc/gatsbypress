import * as React from "react"
import { 
  Box,
  Flex,
  Spacer,
  Container,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react"
import MenuItems from "./menuItems";
import NavbarToggle from "./navbarToggle";
import Logo from "./logo"
import ColorModeToggle from "./colorModeToggle";
import { Collapse } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"


const Nav = function ({ data })  {
  const items = data?.allWpMenu?.nodes[0]?.menuItems?.nodes
  const title = data?.wp?.allSettings?.generalSettingsTitle
  const logoMediaItem = data?.allFile?.edges[0]?.node
  const [ifIsOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!ifIsOpen)
  const { colorMode, toggleColorMode } = useColorMode()
  const isOpenColorMode = useColorModeValue('white', 'gray.700')
  const isClosedColorMode = useColorModeValue('gray.50', 'gray.800')
  const { isOpen, onToggle } = useDisclosure()

    return (
      <Box 
        bg={{base: ifIsOpen? isOpenColorMode : isClosedColorMode, md: isClosedColorMode}}
        borderBottomLeftRadius={{ base: '2xl', md: '0'}}
        borderBottomRightRadius={{ base: '2xl', md: '0'}}
        // bg={useColorModeValue('gray.50', 'gray.700')}
        color={useColorModeValue('gray.700', 'gray.200')}
        boxShadow={{base: ifIsOpen? "lg" : "none", md: "none"}}
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
            wrap="wrap"
            h="100%"
            w="100%"
            py={4}
          >
            <Box>
              <Logo
                siteTitle={title}
                siteLogo={logoMediaItem}
              />   
            </Box>
              <Spacer/>
            <Box>
              <Box mr="4" display={{ base: 'inline-block', md: 'none'}}>
                <ColorModeToggle />   
              </Box>  
              <Box display={{ base: 'inline-block', md: 'initial'}}>
                <NavbarToggle onToggle={onToggle} isOpen={isOpen}/>   
                { // <MenuToggle toggle={toggle} isOpen={isOpen} /> 
                }
              </Box> 
            </Box>
                <Collapse in={isOpen} animateOpacity unmountOnExit>
                  <MenuItems items={items} isOpen={isOpen}></MenuItems>
                </Collapse>
                <Box display={{ base: 'none', md: 'initial'}}>
                  <MenuItems items={items} isOpen={isOpen}></MenuItems>
                </Box>
                <Box ml="6" display={{ base: 'none', md: 'initial'}}>
                <ColorModeToggle/>
              </Box>  
          </Flex>
        </Container>
      </Box>
    )
}

export default Nav
