import * as React from "react"
import {
  useStaticQuery,
  graphql,
  Link 
} from 'gatsby'
import { Center } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import Layout from "../components/layout/layout"
import ListPosts from "../components/blog/listPosts.js"
import Hero from '../components/frontpage/hero'
import SectionHeading from "../components/layout/sectionHeading"
import Features from '../components/frontpage/features'
import PrimaryButton from "../components/buttons/primaryButton"
import SEO from "../components/marketing/seo"
import MailChimpForm from "../components/marketing/newsletter"
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react"
import { Fade } from 'react-awesome-reveal'
 
const HomePage = () => {
  const data = useStaticQuery(graphql`
  query HomePageQuery {
    wp {
      allSettings {
        generalSettingsTitle
      }
    }
    post: allWpPost(
        sort: { fields: [date], order: ASC }
        limit: 6
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
    featured: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 6
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "featured" } } } } }
      ) 
    {
    nodes {
      ...postFields
      categories {
        nodes {
          slug
        }
      }
    }
  }
}
`)
  const posts = data?.post?.edges  
  const featured = data?.featured?.nodes
  const siteTitle = data?.wp?.allSettings?.generalSettingsTitle
  const HomeContent = () => (
  <Layout>
  <SEO title={siteTitle}/>
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
        subheading={'Latest featured posts'}
        mb={'6'}
        mt={'12'}
    />
    <Features
      featured={featured}
    />
    <SectionHeading
      heading={'Latest posts'}
      subheading={'Latest posts from our blog'}
      mb={'6'}
      mt={'2'}
    />
    <ListPosts 
      context={`blog`} 
      posts={posts}     
    />
    <Center marginY="16">
      <Link to="/blog">
        <PrimaryButton arrowRight>
          Read our Blog
        </PrimaryButton>
      </Link>
    </Center>
    <Fade delay={200} duration={500} triggerOnce>
      <MailChimpForm/>
    </Fade>
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
          Nothing found.
          Please add some posts to your WordPress site.
      </Alert>
    </Layout>
    )
  }
}
 
export default HomePage
