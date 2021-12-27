import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import GatsbypressLogo from "../svgs/gatsbypressLogo"
import { useColorMode } from "@chakra-ui/color-mode"

const Logo = ({ siteTitle, siteLogo }) => {
  const { colorMode } = useColorMode();
  let theLogo = ""
  // Local SVG logo
  if ( GatsbypressLogo ) {
    theLogo = 
    <Link to="/" title={siteTitle}>
      <GatsbypressLogo colorMode={colorMode} w={'160px'} h={'100%'}y/>
    </Link>
  } 
  // SVG from WP
  else if (!siteLogo?.childImageSharp && siteLogo?.extension === 'svg') {
    theLogo = 
    <Link to="/" title={siteTitle}>
      <GatsbypressLogo colorMode={colorMode} w={'160px'} h={'100%'}y/>
      <Image
        as={GatsbyImage}
        src={siteLogo?.publicURL}
        alt={siteTitle}
        maxW={'160px'}
        height={'auto'}
      />  
    </Link>
  } 
  // PNG or JPG logo from WP
  else if ((siteLogo?.childImageSharp && siteLogo?.extension === 'png') || siteLogo?.extension === 'jpg') {
    theLogo = 
    <Link to="/" title={siteTitle}>
      <Image
        as={GatsbyImage}
        maxWidth="160px"
        height="auto"
        image={siteLogo?.childImageSharp?.gatsbyImageData}
        alt={siteTitle}
        title={siteTitle}
      />
    </Link>
  }
  // Site Title Text
  else if (siteTitle) {
    theLogo =
    <Text fontSize="md" fontWeight="bold" color="gray.700">
      <Link to={"/"} title={siteTitle}>
          {"Hellooo" + siteTitle}
      </Link>
    </Text>
  } 
  // Fallback
  else {
    theLogo =
    <Text fontSize="md" fontWeight="bold" color="gray.700">
      <Link to={"/"}>
          GatsbyPress
      </Link>
   </Text> 
  }
  return (
    <Box>
      {theLogo}
    </Box>
  )
}

Logo.propTypes = {
    siteTitle: PropTypes.string
  }
  
Logo.defaultProps = {
    siteTitle: `Site Title Placeholder`,
    siteLogo: ``,
  }

export default Logo