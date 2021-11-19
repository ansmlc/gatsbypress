import React from "react"
import { graphql } from "gatsby"
import { 
  Box, 
  Flex,
  Spacer } from "@chakra-ui/react"
import Layout from "../components/layout/layout"
import SEO from "../components/marketing/seo"
import Pager from "../components/blog/pager.js"
import ListPosts from "../components/blog/listPosts.js"
import ArchiveTitle from "../components/blog/archiveTitle"
import Crumb from "../components/layout/breadcrumbs"
import SelectBlogCategory from "../components/blog/selectBlogCategory.js"

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
    tags: allWpTag(limit: 6) {
      nodes {
        ...tagGroupFields
      }
    }
    categories: allWpCategory(limit: 6) {
      nodes {
        ...categoryGroupFields
      }
    }  
  }
`
 
const TagTemplate = ({ data, pageContext }) => {
  const posts = data.allWpPost.edges
  const postCount = data.countpost.nodes.length
  const hashTag = "#" + pageContext.tag 
  const categoryItems = data?.categories?.nodes
  const tagItems = data?.tags?.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag}/>
      <Crumb pageContext={pageContext} data={data}/>
      <Flex>
        <Box>
          <ArchiveTitle 
            title={hashTag} 
            count={postCount}>
          </ArchiveTitle>
        </Box>
        <Spacer />
        <Box>
          <SelectBlogCategory 
            tags={tagItems} 
            categories={categoryItems}>
          </SelectBlogCategory>
        </Box>
      </Flex>
      <ListPosts context={`blog`} posts={posts}/>
      <Box mt="4">
        <Pager pageContext={pageContext} />
      </Box>
    </Layout>
  )
}

export default TagTemplate