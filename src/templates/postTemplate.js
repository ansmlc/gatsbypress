import React from "react"
import { 
  Link, 
  graphql } from "gatsby"
import { 
  GatsbyImage, 
  getImage } from "gatsby-plugin-image"
import { useColorModeValue } from "@chakra-ui/color-mode"
import Layout from "../components/layout/layout"
import Crumb from "../components/layout/breadcrumbs.js"
import UserCard from "../components/user/userCard"
import SEO from "../components/marketing/seo"
import "@wordpress/block-library/build-style/style.css"
import "../.././node_modules/wysiwyg.css/wysiwyg.css"

import {
  Avatar,
  Badge, 
  Box, 
  Text, 
  Image,
  AspectRatio,
  Stack,
 } from "@chakra-ui/react"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  const categories = data.allWpPost.edges[0].node.categories
  const tags = data.allWpPost.edges[0].node.tags
  const author = data.allWpPost.edges[0].node.author
  const image = post?.featuredImage?.node?.localFile
  return (
    <Layout>
      <SEO title={post.title}/>
      <Crumb data={post}/>
      <Box 
        data-sal="slide-up"
        data-sal-duration={800}>
        <Box> 
          <Text
            as="h1"
            fontWeight="bold"
            fontSize="4xl"
            marginTop="6"
            lineHeight="1.1"
            color={useColorModeValue('gray.800', 'gray.50')}
          >
            {post.title}
          </Text>
        </Box>
        <Stack my={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={author.node.avatar.url}
            alt={'Author'}
            size={'sm'} 
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} color={useColorModeValue('gray.800', 'gray.100')}>
                {author.node.name}
            </Text>
            <Text color={'gray.500'}><time>{post.date}</time></Text>
          </Stack>
        </Stack>
      </Box>
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
              alt={post.title}
              rounded={'2xl'} 
              roundedBottomLeft={0}
              roundedBottomRight={0}
            /> 
            :
            <Image
              src="https://via.placeholder.com/1920x1080" 
              alt={post.title || ""}
              rounded={'2xl'} 
              roundedBottomLeft={0}
              roundedBottomRight={0}
            />         
          }
        </AspectRatio>
        <Box 
          className="wysiwyg"
          color="gray.800"
          fontSize="normal"
          padding={{ base: 4, md: 12 }}
          paddingY={{ base: 6 }}
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <Box mt="6">
            {tags?.nodes.map( tag => (
            <Box display="inline" marginRight="3">
                  <Link to={"../../tag/" + tag.name.replace(/\s+/g, "-").toLowerCase()}>
                    <Badge colorScheme="cyan">{"# " + tag.name}</Badge>
                  </Link>
            </Box>
            ))}
          </Box>
        </Box>

        </Box>
      <UserCard user={author}/>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          categories {
            nodes {
              name
              uri
            }
          }
          tags {
            nodes {
              name 
              uri
            }
          }
          author {
						node {
              name
              uri
              description
              avatar {
								url
              }
            }
          }
        }
      }
      nodes {
        title
        content
        date(formatString: "MMMM DD, YYYY")
        uri
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
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`