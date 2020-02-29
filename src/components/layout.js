import React from "react"
import { Link } from "gatsby"
import styles from "../styles/main.module.css"

export default ({children}) => {  
  return (
    <div className={styles.layout}>
      <Link to={"/"}><h1>Youtube Playlist visualizer</h1></Link>
      {children}
      <a href="https://akashmeshram.github.io/" className={styles.foot}  target="_blank"  rel="noopener noreferrer"> By Akash Meshram</a>
    </div> 
  ) 
}
