import React from "react"
import { Link } from "gatsby"
import { Box, Button, Icon} from "@chakra-ui/react"
import { BiFilter } from "@react-icons/all-files/bi/BiFilter";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"

const BlogMenuItems = ({ items }) => {
  if (items && items.length) {
    const prefixCat = '../..'
    const menuItems = items
    let catMenuItems = []
    menuItems.map(item => (
      item.uri.includes('featured')?
      false : catMenuItems.push(item)
    ))
    const listAllCategories = catMenuItems.map(catMenuItem => (
      <MenuItem>
        <Link 
          activeStyle={{ color: "red" }} 
          partiallyActive={true} 
          to={prefixCat + catMenuItem.uri.replace(/\s+/g, "-").toLowerCase()}>{catMenuItem.name + "(" + catMenuItem.count + ")"}
        </Link>
      </MenuItem>
    ))
    return (
      <Box>
        <Menu>
          <MenuButton           
          as={Button}
          backgroundColor="transparent" 
          fontWeight="normal"
          fontSize="sm"
          color="gray.700"
          >
            Filter <Icon as={BiFilter} w="5" h="5" fontWeight="normal"/>
          </MenuButton>
          <MenuList>
            {listAllCategories}
          </MenuList>
        </Menu>
      </Box>
    )
  }
  else {
    return "No blog categories"
  }
}

export default BlogMenuItems
