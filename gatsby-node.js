const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `File`) {
    const slug = "/" + node.name + "/"
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/playlist.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
