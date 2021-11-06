import React from "react"
import { 
    Link
} from "gatsby"
import { 
    Box,
    Text,
    Stack
} from "@chakra-ui/react"

const MenuItems = ({ toggle, isOpen, items }) => {
const prefixPage = '../../page'
// Removed category links from now altogether. Return?
// const prefixCat = '../..'
const menuItems = items
let catMenuItems = []
let pageMenuItems = []
{menuItems.map(item => (
    item.url.includes('category')?
    catMenuItems.push(item)
    :
    pageMenuItems.push(item)
))}
return (
<Box
  display={{ base: isOpen ? "block" : "none", md: "block" }}
  flexBasis={{ base: "100%", md: "auto" }}
>
    <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        p={[4, 4, 0, 0]}
    >
        <Box fontSize="sm" fontWeight="normal" color="gray.500" min-width="200px">
            <Link
            activeStyle={{ textDecoration: "underline" }}    
                to="/" 
                key="frontpage">Home</Link>
        </Box>
        <Box fontSize="sm" fontWeight="normal" color="gray.500" min-width="200px">
            <Link 
                activeStyle={{ textDecoration: "underline" }}    
                partiallyActive={true}             
                to="/blog" 
                key="blogpage"
            >Blog</Link>
        </Box>
        {
          //  Seperate category and page items
        }

        {pageMenuItems.map(pageItem => (
            <Box fontSize="sm" fontWeight="normal" color="gray.500" min-width="200px">
                <Link 
                    activeStyle={{ textDecoration: "underline" }}    
                    partiallyActive={true}  
                    to={prefixPage + pageItem.url.replace(/\s+/g, "-").toLowerCase()} 
                    key={pageItem.id}
                >
                    {pageItem.label}
                </Link>   
            </Box>
        ))}
        <Box fontSize="sm" fontWeight="normal" color="gray.500" min-width="200px">
            <Link 
                activeStyle={{ textDecoration: "underline" }}    
                partiallyActive={true} 
                to="/contact" 
                key="contactpage"
            >
                Contact
            </Link>
        </Box>
    </Stack>
</Box>
)
}

export default MenuItems