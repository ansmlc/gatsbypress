import * as React from "react"
import { 
  graphql,
  Link } from 'gatsby'
import { Center } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/color-mode"
import Layout from '../components/layout'
import ListPosts from "../components/listPosts.js"
import Hero from '../components/hero'
import SectionHeading from '../components/sectionHeading'
import Features from '../components/features'
import Cta from "../components/cta"
import PrimaryButton from "../components/primaryButton"

const HomePage = ({ data }) => {
    const posts = data.post.edges  
    const featured = data?.featured?.nodes
    return (
      <Layout>
          <Hero
            heroHeading={posts[0].node.title}
            heroText={posts[0].node.excerpt}
            heroSlug={posts[0].node.slug}
            heroImage={posts[0].node.featuredImage}
          />
          <SectionHeading
            heading={'Featured'}
            subheading={'The following are posts in "featured" category'}
          />
            <Features
              featured={featured}
            />
          <SectionHeading
            heading={'Latest posts'}
            subheading={'The following are latest blog posts'}
          />
          <ListPosts 
            context={`blog`} 
            posts={posts}     
          />
          <Center marginY="8" w="100%">
            <Link to="/blog">
            <PrimaryButton arrowRight>
              Read our Blog
            </PrimaryButton>
            </Link>
          </Center>
          <Cta/>
      </Layout>
    )
}

export const query = graphql`
  query HomePageQuery {
    post: allWpPost(
        sort: { fields: [date], order: DESC }
        limit: 4
        filter: { categories: { nodes: { elemMatch: { slug: { ne: "featured" } } } } }
    ) 
    {
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
                    placeholder: BLURRED
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
    featured: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 6
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "featured" } } } } }
      ) 
    {
    nodes {
      title
      excerpt
      slug
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
                quality: 82
              )
            }
          }
        }
      }
      categories {
        nodes {
          slug
        }
      }
    }
  }
}
`
export default HomePage
