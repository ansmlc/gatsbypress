const { NODE_ENV } = process.env
require("dotenv").config({
  path: `.env.${NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `gatsbypress`, 
    description: `Gatsby WordPress Starter`,
    author: `@gatsbyjs`,
    siteUrl: `localhost:8000`,
    // Social icons URLs / If not using leave it empty ( `` ) / Do not delete field
    facebookUrl:  `https://facebook.com`,
    instagramUrl:  `https://instagram.com`,
    linkedinUrl: `https://linkedin.com`,
    youtubeUrl: `https://youtube.com`,
    twitterUrl: `https://twitter.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: 'https://racunarstvo.us20.list-manage.com/subscribe/post?u=4754c309a8f1f5ec52db9ea43&amp;id=adbb10ee9a',
        timeout: 3500,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
    resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
       
         // replace this url with the url of your wordpress install
         // https://limomet.a2hosted.com/websby/graphql
         // http://127.0.0.1/wpgatsby/graphql

         url: `https://limomet.a2hosted.com/websby/graphql`,
      },
   },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 82,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsbypress`,
          short_name: `gatsbypress`,
          start_url: `/`,
          background_color: `#F4F5F6`,
          // This will impact how browsers show your PWA/website
          // https://css-tricks.com/meta-theme-color-and-trickery/
          theme_color: `#f56565`,
          display: `standalone`,
          icon: `src/images/gatsbypress-icon.png`,
          icon_options: {
            // For all the options available,
            // please see the section "Additional Resources" below.
            purpose: `any maskable`,
          },
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
  
}


