import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillTwitterSquare } from "@react-icons/all-files/ai/AiFillTwitterSquare";
import {
    Text,
    Box,
    Circle,
    HStack,
    Icon
  } from "@chakra-ui/react"

const SocialIcons = ({ }) => {
  return(
    <HStack>
      <Circle size="30px" bg="gray" color="white">
        <Icon as={AiFillFacebook} w="20px" h="20px" />
      </Circle>
      <Circle size="30px" bg="gray" color="white">
        <Icon as={AiFillInstagram} w="20px" h="20px"/>
      </Circle>
      <Circle size="30px" bg="gray" color="white">
        <Icon as={AiFillLinkedin} w="20px" h="20px"/>
      </Circle>
      <Circle size="30px" bg="gray" color="white">
        <Icon as={AiFillYoutube} w="20px" h="20px"/>
      </Circle>
      <Circle size="30px" bg="gray" color="white">
        <Icon as={AiFillTwitterSquare} w="20px" h="20px"/>
      </Circle>
    </HStack>
  )}

  export default SocialIcons