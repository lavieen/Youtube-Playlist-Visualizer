import React from "react"
import styles from "../styles/playlist.module.css"

export default (props) => {  
  return (
      <div className={styles.item}>
          <a href={props.video}  target="_blank"  rel="noopener noreferrer">
            <img src={props.thumbnail} alt={props.title}/>        
          </a>
          <p>
            <a href={props.video}  target="_blank"  rel="noopener noreferrer">{props.title}</a>
            <span className={styles.tooltiptext}>{props.title}</span>
          </p>           
      </div>
    
  ) 
}
