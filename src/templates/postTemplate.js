import * as React from "react"
import { 
  Link, 
  graphql } from "gatsby"
import { 
  GatsbyImage, 
  getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import Crumb from "../components/layout/breadcrumbs.js"
import UserCard from "../components/user/userCard"
import Seo from "../components/cta/seo"
import NextAndPreviousPost from "../components/posts/nextAndPreviousPost"
import "@wordpress/block-library/build-style/style.css"
import "../.././node_modules/wysiwyg.css/wysiwyg.css"
import { Fade } from "react-awesome-reveal"
import Card from "../components/layout/card"

import {
  Avatar,
  Badge, 
  Box, 
  Text, 
  Image,
  AspectRatio,
  Stack,
  Heading
 } from "@chakra-ui/react"

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
export default function BlogPost({ data, pageContext }) {
  const post = data.allWpPost.nodes[0]
  const tags = data.allWpPost.edges[0].node.tags
  const author = data.allWpPost.edges[0].node.author
  const image = post?.featuredImage?.node?.localFile
  const previousPostSlug = pageContext?.previousPostSlug
  const nextPostSlug = pageContext?.nextPostSlug
  return (
    <Layout>
      <Seo title={post.title}/>
      <Crumb data={post}/>
          <Fade damping={0.5} duration={500} cascade triggerOnce>
            <Box> 
                <Heading
                  as="h1"
                  fontSize={'4xl'}
                  lineHeight="1.1"
                >
                  {post.title}
                </Heading>
            </Box>
            <Stack 
              my={6} 
              direction={'row'} 
              spacing={4} 
              align={'center'}
            >
              <Avatar
                src={author.node.avatar.url}
                alt={'Author'}
                size={'sm'}  
                width={'6'}
                height={'6'}
              />
              <Stack 
                direction={'column'} 
                spacing={0} 
                fontSize={'sm'}
              >
                <Link to={"../../author/" + author.node.slug}>
                  <Text fontWeight={600}>
                      {author.node.name}
                  </Text>
                </Link>
                <Text color={'gray.500'}><time>{post.date}</time></Text>
              </Stack>
            </Stack>
          </Fade>
      <Card 
        as="article"
      >
        <AspectRatio maxW="1920px" ratio={16 / 9}>
          {image?
            <Image 
              as={GatsbyImage} 
              image={getImage(image)} 
              alt={post.title}
              rounded={'brandRadius.image'} 
              roundedBottomLeft={0}
              roundedBottomRight={0}
            /> 
            :
            <Image
              src="https://via.placeholder.com/1920x1080" 
              alt={post.title || ""}
              rounded={'brandRadius.image'} 
              roundedBottomLeft={0}
              roundedBottomRight={0}
            />         
          }
        </AspectRatio>
        <Box 
          className="wysiwyg"
          padding={{ base: 6, md: 12 }}
          paddingY={{ base: 6 }}
        ><div dangerouslySetInnerHTML={{ __html: post.content }}/>
          <Box mt="6">
            {tags?.nodes.map( tag => (
            <Box 
              display="inline" 
              marginRight="3"
              key={tag.slug}
            >
              <Link to={"../../tag/" + tag.slug}>
                <Badge 
                  rounded={'brandRadius.badge'}
                  colorScheme="cyan">{"# " + tag.name}
                </Badge>
              </Link>
            </Box>
            ))}
          </Box>
        </Box>
      </Card>
      <UserCard avatarSize={'lg'} user={author}/>
      <NextAndPreviousPost
        previousPostSlug={previousPostSlug}
        nextPostSlug={nextPostSlug}
      />
    </Layout>
  )
}
