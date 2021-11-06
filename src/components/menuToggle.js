import React from "react"
import { IconButton } from "@chakra-ui/react"
import { BiMenu } from "@react-icons/all-files/bi/BiMenu"
import { BiX } from "@react-icons/all-files/bi/BiX"


const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <IconButton
    display={{ base: "block", md: "none" }}
    colorScheme="gray"
    aria-label="Navigation Toggle"
    onClick={toggle}
    size="lg"
    icon={isOpen ? <BiX /> : <BiMenu />}
    />
  )
}
export default MenuToggle
