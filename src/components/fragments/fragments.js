import { graphql } from 'gatsby'

export const postFields = graphql`
fragment postFields on WpPost {
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
}
`
export const singlePostFields = graphql`
fragment singlePostFields on WpPost {
  title
  content
  nodeType
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
}`

export const singlePageFields = graphql`
fragment singlePageFields on WpPage {
  title
  content
  nodeType
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
}`