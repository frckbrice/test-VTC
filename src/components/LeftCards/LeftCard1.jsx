import React from 'react'
import PropTypes from 'prop-types'
import style from './LeftCard1.module.css'
import Button from '../Atoms/Button'


const LeftCard1 = ({setNextLeftCard,nextLeftCard}) => {
const handleClick = () =>{
    if(nextLeftCard === 1)
        return;
    else
       setNextLeftCard((prev)=> prev - 1)

}

  return (
    <section className={style["left-card"]}>
        <div className={style["div-button"]}>
            <Button onClick={handleClick}/>
        </div>
        <div className={style["div-of-three"]}>
            <div className={style["div-image"]}>
                <img src="GFS.png" alt="gfs-img" className={style.imgfs} />
            </div>
            <div>
            <h1 className={style["left-login-title"]}> Welcome <br /> to <br /> GFS Manager</h1>
            </div>
            <div>
            <h5 className={style["left-login-text"]}>Your Logistic Information management system <br /> (LIMS ) ERP</h5>
            </div>
        </div>
        
        <div className={style["div-slider"]}>
            <button onClick={setNextLeftCard(()=>2)}><img src="first-dash.png" alt="dash" className={style["img-dash"]}/></button>
        </div>
    </section>
  )
}

LeftCard1.propTypes = {}

export default LeftCard1