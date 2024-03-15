import React, {useCallback, useContext} from 'react'
import style from './LeftCard3.module.css'
import Button from '../Atoms/Button'
import { LogContext } from '../context'
import { IoMenu } from "react-icons/io5";

const LeftCard3 = ({setNextCard}) => {
    // const {setNextCard} = useContext(LogContext)
    
    const handleClick = () =>{
        setNextCard("B") 
    }
    const restart = () => {
        setNextCard("A")
    }

    console.log("setNextCard in leftcard 3: ", setNextCard)
  return (
    <section className={style["left-card"]}>
        <div className={style["div-button"]} onClick={()=>handleClick()}>
            <Button/>
        </div>

        <div className={style["div-img"]}>
            <img src="gfs-plan.png" alt="plan-of-work" className={style["img-card"]}/>
        </div>
        <div className={style['mobile-header']} onClick={()=>restart()}>
          <div className={style["div-image"]}>
              <img src="GFS.png" alt="gfs-img" className={style.imgfs} />
          </div>
          <div className={style["div-head-right"]}>
            <img src={"USA-flag.jpg"} alt="us-flag"className={style.img} /> &nbsp; 
            <span>Eng</span>
            <select className={style.select}></select>
            <IoMenu className={style.menu} onClick={()=>restart()}/>
          </div>
        </div>
        <div className={style["div-img-plus"]}>
            <img src="gfs-play.png" alt="plan-of-work" className={style["img-card-plus"]}/>
        </div>
        <div className={style["div-buttons"]}>
            <div className={style["div-buttons-span"]}>
                <span>Don't know how to use the App ?</span>
            </div>
            <div className={style["div-buuton-direct"]}>
                <button className={style["buton-left"]}>user documentation guide
                </button>
                <button className={style["buton-right"]}>Technical assistant
                </button>
            </div>
        </div>
        <div className={style["div-slider"]} >
            <button onClick={restart} className='button'>
                <img src="second-dash.png" alt="dash" className={style["img-dash"]}/>
            </button>
        </div>
  </section>
  )
}
export default LeftCard3