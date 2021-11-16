import * as React from "react"
import { 
  graphql,
  Link } from 'gatsby'
import { Center } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import Layout from "../components/layout/layout"
import ListPosts from "../components/blog/listPosts.js"
import Hero from '../components/frontpage/hero'
import SectionHeading from "../components/layout/sectionHeading"
import Features from '../components/frontpage/features'
import Cta from "../components/frontpage/cta"
import PrimaryButton from "../components/buttons/primaryButton"
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react"
import sal from '../../node_modules/sal.js';
import { useEffect } from "react"

const HomePage = ({ data }) => {
    useEffect(() => {
      sal();
    }, []);
    const posts = data?.post?.edges  
    const featured = data?.featured?.nodes
    console.log(posts, 'posts index')
    const HomeContent = () => (
      <Layout>
        <Box alignItems="center">
          <Hero
            heroHeading={posts[0]?.node.title}
            heroText={posts[0]?.node.excerpt}
            heroSlug={posts[0]?.node.slug}
            heroImage={posts[0]?.node.featuredImage}
          />
        </Box>
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
          <Center marginY="16" w="100%">
            <Link to="/blog">
            <PrimaryButton arrowRight>
              Read our Blog
            </PrimaryButton>
            </Link>
          </Center>
          <Cta/>
      </Layout>
    )
    if (posts) {
      return (
        <HomeContent/>
        )
    }
    else {
      return (
      <Layout>
        <Alert my="4" borderRadius="xl" boxShadow="xl" status="warning">
          <AlertIcon />
          Nothing found.<br/> 
          Please add some posts to your WordPress site.
        </Alert>
      </Layout>
      )
    }

}

export const query = graphql`
  query HomePageQuery {
    post: allWpPost(
        sort: { fields: [date], order: ASC }
        limit: 6
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
