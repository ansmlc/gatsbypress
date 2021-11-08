import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import {
    Circle,
    HStack,
    Icon
} from "@chakra-ui/react"


const SocialIcons = ({ }) => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      allSite {
        nodes {
          siteMetadata {
            title
            facebookUrl
            instagramUrl
            linkedinUrl
            youtubeUrl
            twitterUrl
          }
        }
      }
    }
  `)
  let facebookIcon = ""
  let instagramIcon = ""
  let linkedinIcon = ""
  let youtubeIcon = ""
  let twitterIcon = ""
  const facebook = data?.allSite?.nodes[0]?.siteMetadata?.facebookUrl
  const instagram = data?.allSite?.nodes[0]?.siteMetadata?.instagramUrl
  const linkedin = data?.allSite?.nodes[0]?.siteMetadata?.linkedinUrl
  const youtube = data?.allSite?.nodes[0]?.siteMetadata?.youtubeUrl
  const twitter = data?.allSite?.nodes[0]?.siteMetadata?.twitterUrl

  facebook ? facebookIcon = 
    <a href={facebook} target="_blank" rel="noopener noreferrer">
      <Circle 
        size="34px" 
        bg="gray.100" 
        color="gray.700" 
        _hover={{ bg: "gray.200" }}
      >
        <Icon as={FaFacebookF} w="18px" h="18px" />
      </Circle>
    </a>
  : facebookIcon = null
  instagram ? instagramIcon =
    <a href={instagram} target="_blank" rel="noopener noreferrer">
      <Circle 
        size="34px" 
        bg="gray.100" 
        color="gray.700"
        _hover={{ bg: "gray.200" }}
        >
        <Icon as={AiFillInstagram} w="18px" h="18px"/>
      </Circle>
    </a>
  : instagramIcon = null
  linkedin ? linkedinIcon =
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      <Circle 
        size="34px" 
        bg="gray.100" 
        color="gray.700"
        _hover={{ bg: "gray.200" }}
        >        
        <Icon as={FaLinkedinIn} w="18px" h="18px"/>
      </Circle>
    </a>
  : linkedinIcon = null
  youtube ? youtubeIcon =
    <a href={youtube} target="_blank" rel="noopener noreferrer">
      <Circle 
        size="34px" 
        bg="gray.100" 
        color="gray.700"
        _hover={{ bg: "gray.200" }}
        >        
        <Icon as={FaYoutube} w="18px" h="18px"/>
      </Circle>
    </a>
  : youtubeIcon = null
  twitter ? twitterIcon =
    <a href={twitter} target="_blank" rel="noopener noreferrer">
      <Circle 
        size="34px" 
        bg="gray.100" 
        color="gray.700"
        _hover={{ bg: "gray.200" }}
        >        
        <Icon as={FaTwitter} w="18px" h="18px"/>
      </Circle>
    </a>
  : twitterIcon = null

  let allIcons = [facebookIcon, instagramIcon, youtubeIcon, linkedinIcon, twitterIcon]

  return(
    <HStack spacing="12px">
      {allIcons}
    </HStack>
  )}

SocialIcons.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  youtube: PropTypes.string,
  twitter: PropTypes.string
}
SocialIcons.defaultProps = {
  facebook:``,
  instagram: ``,
  linkedin: ``,
  youtube: ``,
  twitter: ``,
}
  

  export default SocialIcons