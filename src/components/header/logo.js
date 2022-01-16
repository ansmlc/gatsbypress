import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import CustomSvgLogo from "../svgs/customSvgLogo"
import { useColorMode } from "@chakra-ui/color-mode"

const Logo = ({ siteWpTitle, staticLogo, wpLogo, customLogoComponent }) => {
  const { colorMode } = useColorMode();
  let theLogo = ""
  // Logo from WP media library (needs to have "gp-logo" as title)
  if (wpLogo) {
    theLogo =
    <Link to="/" title={siteWpTitle}>
      <Image
        as={GatsbyImage}
        maxWidth="160px"
        height="auto"
        image={wpLogo?.localFile?.childImageSharp?.gatsbyImageData}
        alt={wpLogo?.altText}
        title={siteWpTitle}
      />
    </Link>
  }
  // Local SVG logo from src/static
  else if (!staticLogo?.childImageSharp && staticLogo?.extension === 'svg') {
    theLogo = 
    <Link to="/" title={siteWpTitle}>
      <Image
        src={staticLogo?.publicURL}
        alt={siteWpTitle}
        maxW={'160px'}
        height={'auto'}
      />  
    </Link>
  } 
  // Local JPG/PNG logo from src/static
  else if (staticLogo?.childImageSharp && (staticLogo?.extension === 'png' || staticLogo?.extension === 'jpg')) {
    theLogo = 
    <Link to="/" title={siteWpTitle}>
      <Image
        as={GatsbyImage}
        maxWidth="160px"
        height="auto"
        image={staticLogo?.childImageSharp?.gatsbyImageData}
        alt={siteWpTitle}
        title={siteWpTitle}
      />
    </Link>
  }
  // Custom SVG component
  else if (!staticLogo && customLogoComponent && CustomSvgLogo ) {
    theLogo = 
    <Link to="/" title={siteWpTitle}>
      <CustomSvgLogo colorMode={colorMode} w={'160px'} h={'100%'}y/>
    </Link>
  }
  else {
    theLogo = 
    <Link to={"/"}>
      <Text fontSize="lg" fontWeight="bold" color={colorMode === "light" ? "gray.800" : "gray.50"}>
          {siteWpTitle}
      </Text> 
    </Link>
  }
  return (
    <Box>
      {theLogo}
    </Box>
  )
}

Logo.propTypes = {
    siteWpTitle: PropTypes.string,
    wpLogo: PropTypes.object,
    staticLogo: PropTypes.object,
    wpTitleLogo: PropTypes.bool
  }
  
Logo.defaultProps = {
    siteWpTitle: `GatsbyPress`,
    staticLogo: null,
    wpLogo: null,
    customLogoComponent: true
  }

export default Logo