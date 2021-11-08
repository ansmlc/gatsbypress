
/*
paginate() - for programatically creating pages showing multiple posts based on sourced data from wordpress
*/
const _ = require('lodash')
const path = require('path')
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  query {
    wp {
      allSettings {
        readingSettingsPostsPerPage
      }
    }
    allWpPost {
      tags: group(field: tags___nodes___name) {
        fieldValue
        edges {
          node {
          slug          
          }
        }
      }
      categories: group(field: categories___nodes___name) {
        fieldValue
        edges {
          node {
          slug
          }
        }
      }
      nodes {
        slug
        id
      }
    }
    allWpPage {
      nodes {
        slug
      }
    }
    allWpUser {
      nodes {
        slug
      }
    }
  }
`)

if (result.errors) {
  result.errors.forEach(e => console.error(e.toString()))
  return Promise.reject(result.errors)
}

// Create Author pages
result.data.allWpUser.nodes.forEach(user => {
  createPage({
    itemsPerPage: 10,
    path: `author/${user.slug}`,
    component: require.resolve(`./src/templates/userTemplate.js`),
    context: {
      // This is the $slug variable
      // passed to blog-post.js
      slug: user.slug,
    },
  })
})

// * POST 
// Create a page view for each blog post
result.data.allWpPost.nodes.forEach(node => {
  createPage({
    path: `post/${node.slug}`,
    component: require.resolve(`./src/templates/postTemplate.js`),
    context: {
      // This is the $slug variable
      // passed to blog-post.js
      slug: node.slug,
    },
  })
})

// * PAGE 
// Create a page view for each wordpres page
result.data.allWpPage.nodes.forEach(page => {
  createPage({
    path: `page/${page.slug}`,
    component: require.resolve(`./src/templates/pageTemplate.js`),
    context: {
      // This is the $slug variable
      // passed to blog-post.js
      slug: page.slug,
    },
  })
})



// * BLOG ARCHIVE PAGE 
// Create a paginated blog, e.g., /, /page/2, /page/3
const blogPosts = result.data.allWpPost.nodes
const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)
const postsPerPage = result.data.wp?.allSettings.readingSettingsPostsPerPage
paginate({
  createPage,
  items: blogPosts,
  itemsPerPage: postsPerPage,
  path: `blog/`,
  pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `blog` : `blog`),
  component: blogTemplate,
  context: { type: "blog" },
})

// * CATEGORY
// Create pages and list posts for each category
const categoryTemplate = require.resolve(`./src/templates/categoryTemplate.js`)
result.data.allWpPost.categories.forEach(category => {
  const str = category.fieldValue
  const slug = str.replace(/\s+/g, "-").toLowerCase()
  paginate({
    createPage,
    items: category.edges,
    itemsPerPage: postsPerPage,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `category/${slug}` : `${slug}`),
    component: categoryTemplate,
    context: { slug: slug, category: category.fieldValue },
  })
})

// * TAG 
// Create pages and list posts for each tag
const tagTemplate = require.resolve(`./src/templates/tagTemplate.js`)
result.data.allWpPost.tags.forEach(tag => {
  const str = tag.fieldValue
  const slug = str.replace(/\s+/g, "-").toLowerCase()
  paginate({
    createPage,
    items: tag.edges,
    itemsPerPage: postsPerPage,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `tag/${slug}` : `${slug}`),
    component: tagTemplate,
    context: { slug: slug, tag: tag.fieldValue },
  })
})
}