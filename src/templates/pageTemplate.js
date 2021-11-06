import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Crumb from "../components/breadcrumbs.js"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import "@wordpress/block-library/build-style/style.css"
import { 
  GatsbyImage, 
  getImage 
} from "gatsby-plugin-image"
import { 
  Box, 
  AspectRatio, 
  Image 
} from "@chakra-ui/react"

export default function PagePost({ data }) {
  const page = data.allWpPage.nodes[0]
  const image = page?.featuredImage?.node?.localFile
  console.log(page)
  return (
    <Layout>
      <SEO title={page.title}/>
      <Crumb data={page}/>
      <PageTitle title={page.title} />
      <Box as="article">
        <AspectRatio maxW="1920px" ratio={16 / 9}>
          {image?
            <Image 
              as={GatsbyImage} 
              image={getImage(image)} 
              alt={page.title}
              rounded={'2xl'} 
              marginBottom="2"
            /> 
            :
            <Image
              src="https://via.placeholder.com/1920x1080" 
              alt={page.title || ""}
              rounded={'2xl'} 
              marginBottom="2"
            />         
          }
        </AspectRatio>
        <Box 
          as="div" 
          className="wysiwyg"
          color="gray.800"
          fontSize="normal"
          padding="2"
        >
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Box>
      </Box>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        nodeType
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [WEBP, JPG]
                )
              }
            }
          }
        }
      }
    }
  }
`