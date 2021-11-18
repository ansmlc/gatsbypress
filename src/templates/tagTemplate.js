import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/marketing/seo"
import { graphql } from "gatsby"
import Pager from "../components/blog/pager.js"
import ListPosts from "../components/blog/listPosts.js"
import ArchiveTitle from "../components/blog/archiveTitle"
import { Box } from "@chakra-ui/react"
import Crumb from "../components/layout/breadcrumbs"

export const query = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
    countpost: allWpPost
    (filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } })
    {
      nodes {
        __typename
      }
    }
    allWpPost(
      skip: $skip
      limit: $limit
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ...postFields
          tags {
            nodes {
              uri
              name
            }
          }
          author {
            node {
              name
              slug
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }
`
 
const TagTemplate = ({ data, pageContext }) => {
  //console.log(data)
  //console.log(pageContext)
  const posts = data.allWpPost.edges
  const postCount = data.countpost.nodes.length
  const hashTag = "#" + pageContext.tag 
  return (
    <Layout>
      <SEO title={pageContext.tag}/>
      <Crumb pageContext={pageContext} data={data}/>
      <ArchiveTitle title={hashTag} count={postCount}></ArchiveTitle>
      <ListPosts context={`blog`} posts={posts}/>
      <Box mt="4">
        <Pager pageContext={pageContext} />
      </Box>
    </Layout>
  )
}

export default TagTemplate