import React from 'react'
import styles from "./index.module.css"
import { useState } from 'react'

export default function Input(props) {
  return (
    <div className={styles.inputDiv}>
      <input value={props.value} onChange={props.onChange} type="text" placeholder='Enter todo here...'/>
      <button onClick={props.onClick}>Submit</button>
    </div>
  )
}
