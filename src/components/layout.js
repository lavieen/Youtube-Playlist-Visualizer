import React from "react"
import { Link } from "gatsby"
import styles from "../styles/main.module.css"
import { Helmet } from "react-helmet"

export default ({children}) => {  
  return (
    <div className={styles.layout}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Youtube Playlist Visualizer</title>
      </Helmet>
      <Link to={"/"}><h1>Youtube Playlist Visualizer</h1></Link>
      {children}
      <a href="https://akashmeshram.github.io/" className={styles.foot}  target="_blank"  rel="noopener noreferrer"> By Akash Meshram</a>
    </div> 
  ) 
}
