import React from "react"
import { 
    Link
} from "gatsby"
import { 
    Box,
    Stack,
    Button,
    LightMode,
} from "@chakra-ui/react"
import SocialIcons from "../marketing/socialIcons"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const MenuItems = ({ isOpen, items }) => {
const prefixPage = '../../page'
const menuItems = items
let catMenuItems = []
let pageMenuItems = []
menuItems?.map(item => (
    item.url.includes('category')?
    catMenuItems.push(item)
    :
    pageMenuItems.push(item)
))
return (
<Box
    display={{ base: isOpen ? "flex" : "none", md: "flex" }}
    opacity={{ base: isOpen ? '100' : '0', md: '100' }}
    alignItems="center"
   //  flexBasis={{ base: "100%", md: "auto" }}
>
    <Stack
        fontSize={{ base: "normal", md: "sm"}}
        spacing={{ base: 6, md: 8}}
        textAlign={'left'}
        justify={["center", "center", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        p={[8, 8, 0, 0]}
        marginTop={{ base: "2", md: "0"}}
        textTransform="uppercase"
        alignItems={{ base: 'start', md: 'center'}}
    >
        <Box min-width="150px">
            <Link
                activeStyle={{ fontWeight: "bold" }}    
                to="/" 
                key="frontpage">Home</Link>
        </Box>
        <Box min-width="200px">
            <Link 
                activeStyle={{ fontWeight: "bold" }}    
                partiallyActive={true}             
                to="/blog" 
                key="blogpage"
            >Blog</Link>
        </Box>
        {pageMenuItems.map(pageItem => (
            <Box 
                min-width="200px"
                key={pageItem.id}
            >
                <Link 
                    activeStyle={{ fontWeight: "bold" }}    
                    partiallyActive={true}  
                    to={prefixPage + pageItem.url.replace(/\s+/g, "-").toLowerCase()} 
                    
                >
                    {pageItem.label}
                </Link>   
            </Box>
        ))}
        <Box min-width="200px">
            <AnchorLink 
                to="/#newsletter" 
                key="newsletter"
            >
                
                <LightMode>
                    <Button
                        colorScheme={'brand'}
                        variant={'outline'}
                        rounded={'full'}
                        borderWidth={'2px'}
                        _hover={{ bg: "red.600", color: "white" }}
                    >
                        Subscribe
                    </Button>
                </LightMode>
            </AnchorLink>
        </Box>
        <Box paddingTop="6" display={{ base: "flex", md: "none" }}>
            <SocialIcons />
        </Box>
    </Stack>
</Box>
)
}

export default MenuItems