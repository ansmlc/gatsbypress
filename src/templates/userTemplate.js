import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import Pager from "../components/blog/pager.js"
import ListPosts from "../components/blog/listPosts.js"
import Crumb from "../components/layout/breadcrumbs.js"
import PageTitle from "../components/layout/pageTitle.js"
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
          ...postFields
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