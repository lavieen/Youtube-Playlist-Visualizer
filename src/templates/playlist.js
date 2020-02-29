import React from "react"
import Layout from "../components/layout"
import Videotrack from "../components/videotrack"
import { graphql } from "gatsby"
import styles from "../styles/playlist.module.css"

export default ({ data }) => {
  const music = data.file.childrenPlaylist.filter(node => node.status.privacyStatus === "public")

  return (
    <Layout>
      <h2 className={styles.playlistname}>{data.file.name}</h2>
      <div className={styles.container}>
        {music.map((node) => {
          const href = "https://www.youtube.com/watch?v=" + node.contentDetails.videoId
          const name = node.snippet.title
          const pic = node.snippet.thumbnails.medium.url
          return (
            <Videotrack video={href} title={name} thumbnail={pic}/>
          )
        })}
      </div>      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    file(fields: {slug: {eq: $slug}}) {
      childrenPlaylist {
        snippet {
          title
          thumbnails {
            medium {
              url
            }
          }
        }
        id
        contentDetails {
          videoId
        }
        status {
          privacyStatus
        }
      }
      name
    }
  }
`