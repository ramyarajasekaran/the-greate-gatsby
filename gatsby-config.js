module.exports = {
  siteMetadata: {
    title: `The Great Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `blog`,
          path: `${__dirname}/blog`
        }
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `data`,
          path: `${__dirname}/static`
        }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-pdf",
  ],
}
