import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Plist from "../components/playlistname"
import styles from "../styles/main.module.css"

export default ({ data }) => {
  const playlist = data.allFile.nodes
  return (
    <Layout> 
      <div className={styles.listContainer}>
        {playlist.map((node) => (<Plist name={node.name} page={node.fields.slug} key={node.id}/>))}
      </div>           
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
        nodes {
            fields {
                slug
            }
            name
            id
        }
    }
  }
`