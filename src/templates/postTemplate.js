import React from "react"
import { 
  Link, 
  graphql } from "gatsby"
import { 
  GatsbyImage, 
  getImage } from "gatsby-plugin-image"
import { useColorModeValue } from "@chakra-ui/color-mode"
import Layout from "../components/layout"
import Crumb from "../components/breadcrumbs.js"
import UserCard from "../components/user/userCard"
import SEO from "../components/seo"
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
  Flex } from "@chakra-ui/react"
import { BiUser } from "@react-icons/all-files/bi/BiUser"
import { BiCalendarAlt } from "@react-icons/all-files/bi/BiCalendarAlt"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  const categories = data.allWpPost.edges[0].node.categories
  const tags = data.allWpPost.edges[0].node.tags
  const author = data.allWpPost.edges[0].node.author
  const image = post?.featuredImage?.node?.localFile
  console.log(author, 'author')
  return (
    <Layout>
      <SEO title={post.title}/>
      <Crumb data={post}/>
      <Box> 
        <Text
          as="h1"
          fontWeight="bold"
          fontSize="3xl"
          marginTop="4"
          lineHeight="1.1"
        >
          {post.title}
        </Text>
      </Box>
      <Stack my={4} direction={'row'} spacing={4} align={'center'}>
        <Avatar
          src={author.node.avatar.url}
          alt={'Author'}
          size={'sm'} 
        />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>
              {author.node.name}
          </Text>
          <Text color={'gray.500'}><time>{post.date}</time></Text>
        </Stack>
      </Stack>
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
          padding="12"
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