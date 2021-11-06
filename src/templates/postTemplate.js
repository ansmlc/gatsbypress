import React from "react"
import { 
  Link, 
  graphql } from "gatsby"
import { 
  GatsbyImage, 
  getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Crumb from "../components/breadcrumbs.js"
import UserCard from "../components/user/userCard"
import SEO from "../components/seo"
import "@wordpress/block-library/build-style/style.css"
import {
  Spacer,
  Badge, 
  Box, 
  Text, 
  Image,
  AspectRatio,
  HStack,
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
          fontSize="2rem"
          marginTop="1rem"
          marginBottom="2"
          lineHeight="1.1"
        >
          {post.title}
        </Text>
        {tags?.nodes.map( tag => (
          <Box display="inline" marginRight="3">
                <Link to={"../../tag/" + tag.name.replace(/\s+/g, "-").toLowerCase()}>
                  <Badge colorScheme="cyan">{"# " + tag.name}</Badge>
                </Link>
          </Box>
        ))}
      </Box>
      <Flex marginY="3" direction="row" alignItems="center" fontSize="0.9rem" textColor="gray.500">
        <Flex align="center" marginRight="4">
          <BiCalendarAlt/><Text marginLeft="1.5" letterSpacing="tight">{post.date}</Text>
        </Flex>
        <Flex align="center">
          <BiUser/><Box marginLeft="1.5">{author.node.name}</Box> 
        </Flex>
      </Flex>
      <Box as="article">
        <AspectRatio maxW="1920px" ratio={16 / 9}>
          {image?
            <Image 
              as={GatsbyImage} 
              image={getImage(image)} 
              alt={post.title}
              rounded={'2xl'} 
              marginBottom="2"
            /> 
            :
            <Image
              src="https://via.placeholder.com/1920x1080" 
              alt={post.title || ""}
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
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Box>

            {tags?.nodes.map( tag => (
              <span className="tag is-light">                    
                <Link to={tag.uri.replace(/\s+/g, "-").toLowerCase()}>
                  {"#" + tag.name}
                </Link>
              </span>          
            ))}
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