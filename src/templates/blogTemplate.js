import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pager from "../components/pager.js"
import ListPosts from "../components/listPosts.js"
import ArchiveTitle from "../components/archiveTitle"
import SelectBlogCategory from "../components/selectBlogCategory.js"
import { BiHomeAlt } from "@react-icons/all-files/bi/BiHomeAlt";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink, 
  Flex, 
  Box, 
  Spacer
} from "@chakra-ui/react"

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
        id
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
                  quality: 82
                )
              }
            }
          }
        } 
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
    console.log(data.allWpPost.edges, 'post edges')
    console.log(data.countpost.nodes.length, 'total post count')
    console.log(pageContext.nextPagePath, 'PAGE CONTEXT')
    console.log(menuItems, 'data.wpCategory')

    return (
    <Layout>
      <SEO title="Blog" />
      <Box
            fontSize="0.9rem"
            textColor="gray.500"
            marginBottom="1rem"
      >
      <Breadcrumb>   
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} key="frontpage" to="/"><BiHomeAlt/></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} key="blog" to="../../blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
      </Breadcrumb>
      </Box>
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
