import React from "react"
import { Link } from "gatsby"
import { Box, IconButton} from "@chakra-ui/react"
import { IoFilter } from "@react-icons/all-files/io5/IoFilter";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text
} from "@chakra-ui/react"

const BlogMenuItems = ({ items }) => {
  if (items && items.length) {
    const prefixCat = '../..'
    const menuItems = items
    let catMenuItems = []
    menuItems.map(item => (
      item.uri.includes('featured') || item.count === null ?
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
          <Text display="inline" fontSize="sm" color="gray.600">
          Filter:</Text>
          <MenuButton 
                as={IconButton}
                bg="transparent"
                isRound
                color={"gray-700"}
                aria-label="Category Filter Toggle"
                fontSize="lg"
                icon={<IoFilter />}/>
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
