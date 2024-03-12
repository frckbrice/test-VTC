import React from 'react'
import PropTypes from 'prop-types'
import style from './LeftCard1.module.css'
import Button from '../Atoms/Button'
import SLider from '../organisms/SLider'
import SL from './Sl'

const LeftCard1 = ({...props}) => {
  return (
    <section className={style["left-card"]}>
        <div className={style["div-button"]}>
            <Button/>
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
            <button><img src="first-dash.png" alt="dash" className={style["img-dash"]}/></button>
        </div>
    </section>
  )
}

LeftCard1.propTypes = {}

export default LeftCard1