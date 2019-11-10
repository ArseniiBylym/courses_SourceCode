module.exports = {
  siteMetadata: {
    title: 'Level Up Blog',
    description: 'A new blog!',
    siteUrl: 'https://sharp-jang-e7f473.netlify.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Level Up Blog',
        short_name: 'LUTBlog',
        start_url: '/',
        background_color: '#524763',
        theme_color: '#524763',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
