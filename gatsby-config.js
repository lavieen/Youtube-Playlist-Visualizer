/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `playlist`,
      },
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Youtube Playlist visualizer`,
        short_name: `GatsbyJS`,
        display: `standalone`,
        icon: `src/assets/playlist.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
