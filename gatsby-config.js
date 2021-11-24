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
    // `gatsby-plugin-scroll-reveal`,
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

         url: `https://lifeofawinner.com/graphql`,
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
          background_color: `#f7f0eb`,
          // This will impact how browsers show your PWA/website
          // https://css-tricks.com/meta-theme-color-and-trickery/
          // theme_color: `#663399`,
          display: `standalone`,
          icon: `src/images/gatsbypress-icon.png`
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
}


