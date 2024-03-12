import React from 'react'
import PropTypes from 'prop-types'
import style from './LeftCard3.module.css'
import Button from '../Atoms/Button'
import SLider from '../organisms/SLider'

const LeftCard3 = ({setNextLeftCard,nextLeftCard}) => {

    
        const handleClick = () =>{
            if(nextLeftCard === 1) {
                return setNextLeftCard(()=>3)
            }
               
            else
               setNextLeftCard((prev)=> prev - 1)
        }
    

  return (
    <section className={style["left-card"]}>
         <div className={style["div-button"]} onClick={handleClick}>
            <Button/>
        </div>
        <div className={style["div-img"]}>
           <img src="gfs-plan.png" alt="plan-of-work" className={style["img-card"]}/>
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
        <div className={style["div-slider"]}>
            <button onClick={setNextLeftCard(()=>1)}><img src="second-dash.png" alt="dash" className={style["img-dash"]}/></button>
        </div>
  </section>
  )
}

LeftCard3.propTypes = {}

export default LeftCard3