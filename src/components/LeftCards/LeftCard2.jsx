import React, {useContext, useEffect} from 'react'
import style from './LeftCard2.module.css'
import { LogContext } from '../context'
import Button from '../Atoms/Button'
import { IoMenu } from "react-icons/io5";

const LeftCard2 = ({setNextCard}) => {

  const next = () => {
    setNextCard("C");
  }

  const back = () => {
    setNextCard("A");
  }
  return (
    <section className={style["left-card"]}>

      <div className={style['mobile-header']}>
          <div className={style["div-image"]}>
              <img src="GFS.png" alt="gfs-img" className={style.imgfs} />
          </div>
          <div className={style["div-head-right"]}>
            <img src={"USA-flag.jpg"} alt="us-flag"className={style.img} /> &nbsp; 
            <span>Eng</span>
            <select className={style.select}></select>
            <IoMenu className={style.menu}/>
          </div>
      </div>

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