import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'
import Layout from "../components/layout/layout"
import SEO from "../components/marketing/seo"
import Pager from "../components/blog/pager.js"
import ListPosts from "../components/blog/listPosts.js"
import ArchiveTitle from "../components/blog/archiveTitle"
import SelectBlogCategory from "../components/blog/selectBlogCategory.js"
import { BiHomeAlt } from "@react-icons/all-files/bi/BiHomeAlt";
import {
  Flex, 
  Box, 
  Spacer
} from "@chakra-ui/react"
import Crumb from "../components/layout/breadcrumbs"

export const query = graphql`
query( $limit: Int!, $skip: Int!) {
  countpost: allWpPost(filter: {status: {eq: "publish"}})
  {
    nodes {
      __typename
    }
  }
  allWpPost(
    limit: $limit
    skip: $skip
    sort: { fields: date, order: DESC }
    filter: { categories: { nodes: { elemMatch: { slug: { ne: "featured" } } } } }
    ) 
  {
    edges {
      node {
        ...postFields
        categories {
          nodes {
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
            slug
            avatar {
              url
            }
          }
        }
      }
    }
  }
  allWpCategory {
    nodes {
      name
      count
      uri
    }
  }
}
`
const BlogPage  = ({ pageContext, data }) => {
    const posts = data.allWpPost.edges
    const allposts = data.countpost
    const postsCount = allposts.nodes.length
    const menuItems = data.allWpCategory.nodes
    return (
    <Layout>
      <SEO title="Blog" /> 
      <Crumb pageContext={pageContext}/>
      <Flex>
        <Box>
          <ArchiveTitle data={posts} count={postsCount} title="Blog"></ArchiveTitle>
        </Box>
        <Spacer />
        <Box>
          <SelectBlogCategory items={menuItems}></SelectBlogCategory>
        </Box>
      </Flex>
      <ListPosts context={`blog`} posts={posts}/>
      <Pager pageContext={pageContext} />
    </Layout>
    )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
    nextPagePath: PropTypes.string
  }),
}

export default BlogPage
