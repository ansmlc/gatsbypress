import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const Logo = ({siteTitle, siteLogo}) => {
  const logo = siteLogo?.childImageSharp?.gatsbyImageData
  let theLogo = ""
  console.log(logo, 'logo')
  console.log(siteLogo, 'siteLogo')

  logo ? 
  theLogo = 
  <Link to="/">
    <Image
      as={GatsbyImage}
      maxWidth="125px"
      height="auto"
      image={logo}
      alt={siteTitle}
      title={siteTitle}
    />
  </Link>
  :siteTitle ?
  theLogo =
    <Text fontSize="md" fontWeight="bold" color="gray.700">
      <Link to={"/"}>
          {"Hellooo" + siteTitle}
      </Link>
    </Text>
  :
  theLogo =
  <Text fontSize="md" fontWeight="bold" color="gray.700">
    <Link to={"/"}>
        hi GatsbyPress
    </Link>
  </Text> 
  return (
    <Box>
      {theLogo}
    </Box>
  )
}

Logo.propTypes = {
    siteTitle: PropTypes.string,
    siteLogo: PropTypes.array
  }
  
Logo.defaultProps = {
    siteTitle: `Site Title Placeholder`,
    siteLogo: ``,
  }

export default Logo