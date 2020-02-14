module.exports = {
  siteMetadata: {
    title: `emojis.party`,
    description: `Google, but for emojis. Find emojis instantly using keywords like 'red', 'love', 'beach' or 'food'.`,
    author: `juliane nagao`,
    siteUrl: `https://emojis.party`,
    social: {
      github: `https://github.com/junagao/emojis.party`,
    },
    keywords: [
      `search`,
      `find`,
      `emojis`,
      `finder`,
      `searcher`,
      `google for emojis`,
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `emojis.party`,
        short_name: `emojis.party`,
        start_url: `/`,
      },
    },
  ],
}
