import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Pager from "../components/pager.js"
import ListPosts from "../components/listPosts.js"
import Crumb from "../components/breadcrumbs.js"
import PageTitle from "../components/pageTitle.js"
import { Avatar, Stack, Text } from "@chakra-ui/react"

export default function UserPage({ data, pageContext }) {
  const user = data?.allWpPost?.edges[0]?.node.author.node
  const posts = data?.allWpPost?.edges
  const avatar = user?.avatar?.url
  return (
    <Layout>
      <Crumb data={user}/>
      <PageTitle  title={user.name}></PageTitle>
      <Stack marginY="6" direction={'row'} spacing={4} align={'start'}>
        <Avatar 
          size="xl"
          src={avatar}
          alt={'Author'}
        />
        <Stack maxW={{ base: "full", md: "50%"}} direction={'column'} spacing={0} fontSize={'normal'}>
          <Text color={'gray.700'}>{user.description} </Text>
        </Stack>
      </Stack>
      <Text 
        as="h2"
        fontSize="xl"
        fontWeight="bold"
        marginTop="6"
        marginBottom="4"
      >
        {"Latest posts by " + user.name + ":"}
      </Text>
      <ListPosts context={`blog`} posts={posts}/>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(
      filter: {author: {node: {slug: {eq: $slug }}}}
      limit: 9
      ) {
      edges {
        node {
          author {
            node {
              nodeType
              name
              slug
              description
              avatar {
                url
              }
            }
          }
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [WEBP, JPG]
                    quality: 90
                  )
                }
              }   
            }
          }
          tags {
            nodes {
              name
              uri
            }
          }
        }
      }
    }
  }
`