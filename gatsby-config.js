module.exports = {
  siteMetadata: {

      title: "The Humanified App - Sign up for our Beta!",
      description:
        "The social network for social impact. Make real change happen, one tap at a time.",
      url: "https://www.humanified.org", // No trailing slash allowed!
      siteUrl: `https://www.humanified.org`,
      image: "/images/mask5.png", // Path to your image you placed in the 'static' folder
      twitterUsername: "@humanifiedapp",
      author: `Humanified`,

  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-remove-console`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-next-seo',
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: '624158401859448',
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-facebook-multi-pixels`,
    //   options: [
    //     {
    //       dev: true,
    //       alias: 'pixelA',
    //       pixelId: '624158401859448',
    //       viewContent: true,
    //       pageView: true,
    //     },
    //     {
    //       dev: true,
    //       alias: 'pixelB',
    //       pixelId: '246839569912365',
    //       viewContent: true,
    //       pageView: true,
    //     },
    //   ],
    // },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-PGW75S8",
  
    //     // Include GTM in development.
    //     //
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: true,
  
    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     //
    //     // Defaults to null
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/humanifiedfavicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
