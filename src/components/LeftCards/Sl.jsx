import React from 'react'
import PropTypes from 'prop-types'
import styles from './LeftCard1.module.css'
import Button from '../Atoms/Button'
import SLider from '../organisms/SLider'

const SL = ({...props}) => {


  return (
    <section className={styles["left-card"]}>
    
        <span styles={styles.dashOne}></span>
        <span styles={styles.dashTwo}></span> 
        <span styles={styles.dasheThree}></span> 
    </section>
  )
}

SL.propTypes = {}

export default SL