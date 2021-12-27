import * as React from "react"
import {
  Box, 
  Container 
} from "@chakra-ui/react"
import PropTypes from "prop-types"
import Nav from "../header/nav"
import Footer from "../footer/footer"
import { useStaticQuery, graphql } from "gatsby"

  const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allWpCategory {
        nodes {
          name
          count
          uri
          id
        }
      }
      allFile(filter: {name: {eq: "gp-custom-logo"}}) {
        edges {
          node {
            publicURL
            name
            extension
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      wp {
        allSettings {
          generalSettingsDescription
          generalSettingsTitle
        }
      }
      allWpMenu(filter: {name: {eq: "gp-menu-header"}}) {
        nodes {
          id
          menuItems {
            nodes {
              label
              url
              id
            }
          }
        }
      } 
      footer: allWpMenu(filter: {name: {eq: "gp-menu-footer"}}) {
        nodes {
          id
          menuItems {
            nodes {
              label
              url
              id
            }
          }
        }
      }
   }
 `)
   return (
     <>
    {
    //<Nav data={data} />
    //  <AnimatedMenu/>
    }
      <Nav data={data}/>
      <Container maxW="container.lg">
          <Box as="main">
              {children}
          </Box>
      </Container>
      <Footer data={data}/>
    </>
   )
 }
 
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 