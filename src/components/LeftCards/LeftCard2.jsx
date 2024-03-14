import React, {useContext, useEffect} from 'react'
import style from './LeftCard2.module.css'
import { LogContext } from '../context'
import Button from '../Atoms/Button'

const LeftCard2 = ({setNextCard}) => {

  const next = () => {
    setNextCard("C");
  }

  const back = () => {
    setNextCard("A");
  }
  return (
    <section className={style["left-card"]}>
        <div className={style["div-img"]} >
        <div className={style["div-button"]}>
           <button onClick={back}>
                <img src="img-back.png" alt="dash" className={style["img-back"]}/>
            </button>
         </div>
           <div className={style["div-slider"]} >
            <button onClick={next}>
                <img src="img-next.png" alt="dash" className={style["img-dash"]}/>
            </button>
        </div> 
        </div>
      
  </section>
  )
}

LeftCard2.propTypes = {}

export default LeftCard2