import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/marketing/seo"
import Pager from "../components/blog/pager.js"
import ListPosts from "../components/blog/listPosts.js"
import ArchiveTitle from "../components/blog/archiveTitle"
import SelectBlogCategory from "../components/blog/selectBlogCategory.js"
import Crumb from "../components/layout/breadcrumbs.js"
import { 
  Flex,  
  Spacer, 
  Box 
} from "@chakra-ui/react"

export const query = graphql`
query($slug: String!, $skip: Int!, $limit: Int!) {
  countpost: allWpPost( filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } }})
  {
    nodes {
      __typename
    }
  }
  allWpPost (
    skip: $skip
    limit: $limit
    filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } }}
    sort: { fields: date, order: DESC }
  ) {
    edges {
      node {
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
const CategoryTemplate = ({ data, pageContext }) => {
  const posts = data?.allWpPost?.edges
  const postCount = data?.countpost?.nodes?.length
  const menuItems = data?.allWpCategory?.nodes
  return (
    <Layout>
      <SEO title={pageContext.category}/>
      <Crumb pageContext={pageContext} data={data}/>
      <Flex>
        <Box>
          <ArchiveTitle title={pageContext.category} count={postCount}></ArchiveTitle>
        </Box>
        <Spacer />
        <Box>
          <SelectBlogCategory items={menuItems}></SelectBlogCategory>
        </Box>
      </Flex>
      <SEO title="Category" />
      <ListPosts context={`blog`} posts={posts}/>
      <Box mt="4">
        <Pager pageContext={pageContext} />
      </Box>
    </Layout>
  )
}

export default CategoryTemplate