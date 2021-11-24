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
import { Fade } from "react-awesome-reveal"

import {
  Avatar,
  Badge, 
  Box, 
  Text, 
  Image,
  AspectRatio,
  Stack,
 } from "@chakra-ui/react"
import PrimaryButton from "../components/buttons/primaryButton"

 export const query = graphql`
 query($slug: String!) {
   allWpPost(filter: { slug: { eq: $slug } }) {
     edges {
       next {
         slug
       }
       previous {
         slug
       }
       node {
         tags {
           nodes {
             name 
             slug
           }
         }
         author {
           node {
             name
             slug
             description
             avatar {
               url
             }
           }
         }
       }
     } 
     nodes {
       ...singlePostFields
     }
   }
 }
`
export default function BlogPost({ data, pageContext, context}) {
  const post = data.allWpPost.nodes[0]
  const tags = data.allWpPost.edges[0].node.tags
  const author = data.allWpPost.edges[0].node.author
  const image = post?.featuredImage?.node?.localFile
  const nextPostSlug = pageContext?.nextPostSlug
  const previousPostSlug = pageContext.previousPostSlug
  var PreviousPostLink = ''
  var NextPostLink = ''
  previousPostSlug?
  PreviousPostLink = 
    <Link to={"../../post/" + previousPostSlug}>
      <PrimaryButton arrowLeft>
        Previous post
      </PrimaryButton>
    </Link>  
  : PreviousPostLink = ''
  nextPostSlug? 
  NextPostLink =
    <Link to={"../../post/" + nextPostSlug}>
      <PrimaryButton arrowRight>
        Next post
      </PrimaryButton>
    </Link>
  : NextPostLink = ''
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
            <Link to={"../../author/" + author.node.slug.replace(/\s+/g, "-").toLowerCase()}>
              <Text fontWeight={600} color={useColorModeValue('gray.800', 'gray.100')}>
                  {author.node.name}
              </Text>
            </Link>
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
          padding={{ base: 6, md: 12 }}
          paddingY={{ base: 6 }}
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <Box mt="6">
            {tags?.nodes.map( tag => (
            <Box display="inline" marginRight="3">
                  <Link to={"../../tag/" + tag.slug.replace(/\s+/g, "-").toLowerCase()}>
                    <Badge colorScheme="cyan">{"# " + tag.name}</Badge>
                  </Link>
            </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <UserCard avatarSize={'lg'} user={author}/>
        <Stack 
          justify={{ base: "start", md: "center"}} 
          marginY="8" 
          direction={{ base: "column", md: "row" }} 
          spacing={4}
        >
          {PreviousPostLink}
          {NextPostLink}
        </Stack>    
    </Layout>
  )
}
