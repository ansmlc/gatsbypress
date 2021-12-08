import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import Crumb from "../components/layout/breadcrumbs.js"
import SEO from "../components/marketing/seo"
import "@wordpress/block-library/build-style/style.css"
import { 
  GatsbyImage, 
  getImage 
} from "gatsby-plugin-image"
import { 
  Box, 
  AspectRatio, 
  Image,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"

export default function PagePost({ data }) {
  const page = data.allWpPage.nodes[0]
  const image = page?.featuredImage?.node?.localFile
  console.log(page)
  return (
    <Layout>
      <SEO title={page.title}/>
      <Crumb data={page}/>
      <Fade duration={500} triggerOnce>
        <Text
            as="h1"
            fontWeight="bold"
            fontSize="3xl"
            marginTop="4"
            marginBottom="6"
            lineHeight="1.1"
          >
            {page.title}
        </Text>
      </Fade>
        <Box 
          as="article"
          bg={useColorModeValue('white', 'gray.700')}
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="2xl"
        >
          <AspectRatio maxW="1920px" ratio={16 / 9}>
            {image?
              <Image 
                as={GatsbyImage} 
                image={getImage(image)} 
                alt={page.title}
                rounded={'2xl'} 
                roundedBottomLeft={0}
                roundedBottomRight={0}
              /> 
              :
              <Image
                src="https://via.placeholder.com/1920x1080" 
                alt={page.title || ""}
                rounded={'2xl'} 
                roundedBottomLeft={0}
                roundedBottomRight={0}            />         
            }
          </AspectRatio>
          <Box 
            className="wysiwyg"
            color="gray.800"
            padding={{ base: 4, md: 12 }}
            paddingY={{ base: 6 }}
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
      ...singlePageFields
      }
    }
  }
`