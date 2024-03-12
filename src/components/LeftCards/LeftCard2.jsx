import React from 'react'
import PropTypes from 'prop-types'
import style from './LeftCard2.module.css'

const LeftCard2 = ({setNextLeftCard,nextLeftCard}) => {
  return (
    <section className={style["left-card"]}>
        <div className={style["div-img"]} onClick={setNextLeftCard(()=>3)}>
           <img src="human.png" alt="human-img" className={style["img-card"]}/>
        </div>
  </section>
  )
}

LeftCard2.propTypes = {}

export default LeftCard2