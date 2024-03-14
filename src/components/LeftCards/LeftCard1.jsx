import React, {useContext,useCallback} from 'react';
import style from './LeftCard1.module.css'
import Button from '../Atoms/Button';
import { LogContext ,} from '../context'


const LeftCard1 = ({...props}) => {
   
    // const {nextCard, setNextCard } = useContext(LogContext)
   
    // useEffect(() => {
        
    //   },[nextCard, setNextCard]);
console.log("leftcard 1: ", props.nextCard)
    const handleClick = () =>{
        if(props.nextCard === 1)
            return;
    }

    const next = ()=>{
        props.setNextCard("B")
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
        
        <div className={style["div-slider"]} >
            <button onClick={()=>next()}>
                <img src="first-dash.png" alt="dash" className={style["img-dash"]}/>
            </button>
        </div>
    </section>
  )
}

export default LeftCard1