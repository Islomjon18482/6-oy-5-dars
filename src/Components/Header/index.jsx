import React from 'react'
import styles from "./index.module.css"

export default function Header(props) {
  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>Todos {props.number}</h2>
    </div>
  )
}
