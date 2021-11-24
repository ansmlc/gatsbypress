import React from "react"
import { IconButton, Box} from "@chakra-ui/react"
import { HiMenuAlt1 } from "@react-icons/all-files/hi/HiMenuAlt1"
import { HiX } from "@react-icons/all-files/hi/HiX"


const NavbarToggle = ({ onToggle, isOpen }) => {
  return (
  <Box display={{ base: "block", md: "none" }}>
    <IconButton
      isRound
      colorScheme={'gray'}
      aria-label="Navigation Toggle"
      onClick={onToggle}
      boxShadow={isOpen? "md" : "sm"}
      fontSize="xl"
      transform="scaleX(-1)"
      icon={isOpen ? <HiX /> : <HiMenuAlt1 />}
    />
  </Box>
  )
}
export default NavbarToggle
