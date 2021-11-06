import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Pager from "../components/pager.js"
import ListPosts from "../components/listPosts.js"
import Crumb from "../components/breadcrumbs.js"
import ArchiveTitle from "../components/archiveTitle"

export default function UserPage({ data, pageContext }) {
  const user = data?.allWpUser.nodes[0]
  const posts = user?.posts?.nodes
  const avatar = user?.avatar?.url
  const userName = user.firstName + " " + user.lastName
  return (
    <Layout>
      <Crumb data={user}/>
      <div className="media">
      <ArchiveTitle title={userName}></ArchiveTitle>
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img src={avatar} alt="" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">     
                      <p>{user.description}</p>                 
                  </div>
        </div>
      </div>
      <ListPosts context={`author`} posts={posts}/>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpUser(filter: { slug: { eq: $slug } }) {
      nodes {
        firstName
        lastName
        slug
        url
        id
        description
        nodeType
        avatar {
          url
        }
        posts {
          nodes {
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
                      quality: 90
                    )
                  }
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
  }
`