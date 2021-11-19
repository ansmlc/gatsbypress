import React from "react"
import { Link } from "gatsby"
import { Box, IconButton} from "@chakra-ui/react"
import { IoFilter } from "@react-icons/all-files/io5/IoFilter";
import { HiX } from "@react-icons/all-files/hi/HiX"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    Text
} from "@chakra-ui/react"

const BlogMenuItems = ({ tags, categories, context }) => {
  let prefix = ''
  let catPrefix = ''
  let tagPrefix = ''
  if (context === 'blog') {
    catPrefix = './../category/'
    tagPrefix = './../tag/'
  } 
  else if (context === 'category') {
    catPrefix = './../'
    tagPrefix = '../../tag/'
  }
  else if (context === 'tag') {
    catPrefix = '../../category/'
    tagPrefix = './../'
  }
  let catMenuItems = []
  let tagMenuItems = []
  var listAllCategories = ''
  var listAllTags = ''

  if (categories && categories.length) {
    categories.map(item => (
      item.uri.includes('featured') || item.count === null ?
      false : catMenuItems.push(item)
    ))
      listAllCategories = catMenuItems.map(catItem => (
      <MenuItem
        borderRadius={'2xl'}
      >
        <Link  
          activeStyle={{ fontWeight: "bold" }} 
          partiallyActive={true} 
          to={catPrefix + catItem.slug.replace(/\s+/g, "-").toLowerCase()}>
            <Text maxW="130px" isTruncated>{catItem.name}</Text>
        </Link>
      </MenuItem>
    ))
  }
  if (tags && tags.length) {
    tags.map(item => (
      item.count === null ?
      false : tagMenuItems.push(item)
    ))
    listAllTags = tagMenuItems.map(tagItem => (
      <MenuItem
        borderRadius={'2xl'}
      >
        <Link  
          activeStyle={{ fontWeight: "semibold" }} 
          partiallyActive={true} 
          to={tagPrefix + tagItem.slug.replace(/\s+/g, "-").toLowerCase()}>
            <Text maxW="130px" isTruncated>{"# " + tagItem.name}</Text>
        </Link>
      </MenuItem>
    ))
  }
    return (
      <Box>
        <Menu boundary="HTMLElement" isLazy>
          {({ isOpen }) => (
            <>
              <MenuButton 
                as={IconButton}
                isRound
                colorScheme={'gray'}
                fontSize="lg"
                transform="scaleX(-1)"
                aria-label="Category Filter Toggle"
                icon={isOpen ? <HiX/> : <IoFilter /> }
              />
              <MenuList
                borderRadius={'2xl'}
                display="flex"
                flexDirection="row"
                px="2"
              >
                <MenuGroup 
                  display="inline-flex" 
                  paddingRight={'4'}
                  width="100%"
                >
                  <Box 
                    textTransform={'uppercase'} 
                    letterSpacing={'wider'}
                    fontSize={'sm'} 
                    px={'4'}
                    my={'4'}
                  >
                    Categories:
                  </Box>
                    {listAllCategories}
                </MenuGroup>
                <MenuGroup 
                  display="inline-flex" 
                  width="100%"
                >
                  <Box 
                    textTransform={'uppercase'} 
                    letterSpacing={'wider'}
                    fontSize={'sm'} 
                    px={'4'}
                    my={'4'}
                  >
                    Tags:
                  </Box>
                  {listAllTags}
                </MenuGroup>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    )
}

export default BlogMenuItems
