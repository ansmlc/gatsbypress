
/*
paginate() - for programatically creating pages showing multiple posts based on sourced data from wordpress
*/
const _ = require('lodash')
const path = require('path')
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResult = await graphql(`
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

if (queryResult.errors) {
  queryResult.errors.forEach(e => console.error(e.toString()))
  return Promise.reject(queryResult.errors)
}

// Create Author pages
queryResult.data.allWpUser.nodes.forEach(user => {
  createPage({
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
queryResult.data.allWpPost.nodes.forEach(node => {
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
queryResult.data.allWpPage.nodes.forEach(page => {
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
const blogPosts = queryResult.data.allWpPost.nodes
const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)
// Set to fixed because of responsive layout fine-tuning
const postsPerPage = queryResult.data.wp?.allSettings.readingSettingsPostsPerPage
paginate({
  createPage,
  items: blogPosts,
  itemsPerPage: 6,
  path: `blog/`,
  pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `blog` : `blog`),
  component: blogTemplate,
  context: { type: "blog" },
})

// * CATEGORY
// Create pages and list posts for each category
const categoryTemplate = require.resolve(`./src/templates/categoryTemplate.js`)
queryResult.data.allWpPost.categories.forEach(category => {
  const str = category.fieldValue
  const slug = str.replace(/\s+/g, "-").toLowerCase()
  paginate({
    createPage,
    items: category.edges,
    itemsPerPage: 6,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `category/${slug}` : `${slug}`),
    component: categoryTemplate,
    context: { slug: slug, category: category.fieldValue },
  })
})

// * TAG 
// Create pages and list posts for each tag
const tagTemplate = require.resolve(`./src/templates/tagTemplate.js`)
queryResult.data.allWpPost.tags.forEach(tag => {
  const str = tag.fieldValue
  const slug = str.replace(/\s+/g, "-").toLowerCase()
  paginate({
    createPage,
    items: tag.edges,
    itemsPerPage: 6,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `tag/${slug}` : `${slug}`),
    component: tagTemplate,
    context: { slug: slug, tag: tag.fieldValue },
  })
})
}