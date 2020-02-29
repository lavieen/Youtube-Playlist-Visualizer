import React from "react"
import { Link } from "gatsby"
import styles from "../styles/main.module.css"

export default (props) => {  
  return (
    <Link to={props.page}>
        <div className={styles.playlistname}> 
          ♫ {props.name}
          <span className={styles.tooltiptext}>{props.name}</span>
        </div>
    </Link>
  ) 
}
 