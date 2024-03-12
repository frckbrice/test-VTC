import React from 'react'
import PropTypes from 'prop-types'
import style from './LeftCard2.module.css'

const LeftCard2 = props => {
  return (
    <section className={style["left-card"]}>
        <div className={style["div-img"]}>
           <img src="human.png" alt="human-img" className={style["img-card"]}/>
        </div>
  </section>
  )
}

LeftCard2.propTypes = {}

export default LeftCard2