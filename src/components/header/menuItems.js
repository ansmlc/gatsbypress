import React from "react"
import { 
    Link
} from "gatsby"
import { 
    Box,
    Stack
} from "@chakra-ui/react"
import SocialIcons from "../marketing/socialIcons"


const MenuItems = ({ isOpen, items }) => {
const prefixPage = '../../page'
// Removed category links from now altogether. Return?
// const prefixCat = '../..'
const menuItems = items
let catMenuItems = []
let pageMenuItems = []
{menuItems?.map(item => (
    item.url.includes('category')?
    catMenuItems.push(item)
    :
    pageMenuItems.push(item)
))}
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
       // marginLeft={{ base: "4", md: "0"}}
        justify={["center", "center", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        p={[8, 8, 0, 0]}
        marginTop={{ base: "2", md: "0"}}
        textTransform="uppercase"
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
        {
          //  Seperate category and page items
        }

        {pageMenuItems.map(pageItem => (
            <Box min-width="200px">
                <Link 
                    activeStyle={{ fontWeight: "bold" }}    
                    partiallyActive={true}  
                    to={prefixPage + pageItem.url.replace(/\s+/g, "-").toLowerCase()} 
                    key={pageItem.id}
                >
                    {pageItem.label}
                </Link>   
            </Box>
        ))}
        <Box min-width="200px">
            <Link 
                activeStyle={{ fontWeight: "bold" }}    
                partiallyActive={true} 
                to="/contact" 
                key="contactpage"
            >
                Contact
            </Link>
        </Box>
        <Box paddingTop="6" display={{ base: "flex", md: "none" }}>
            <SocialIcons />
        </Box>
    </Stack>
</Box>
)
}

export default MenuItems