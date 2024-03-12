import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from "./Slider.module.css"

const SLider = ({...props}) => {
    const {value} = props;
    const spanRef1 = useRef();
    const spanRef2 = useRef();
    const spanRef3 = useRef();

    // useEffect(() => {
    //     if(props.value)
    // },[])
    switch(value) {
        case value === 1 :
            spanRef1.current.style.classList.add("active");
            spanRef2.current.style.classList.remove("active");
            spanRef3.current.style.classList.remove("active");
            break;
        case value === 2 :
            spanRef1.current.style.classList.remove("active");
            spanRef2.current.style.classList.add("active");
            spanRef3.current.style.classList.remove("active");
            break;
        case value === 3 :
            spanRef1.current.style.classList.remove("active");
            spanRef2.current.style.classList.remove("active");
            spanRef3.current.style.classList.add("active");
            break;
        default: return;
    }
    

  return (
    <div className={styles["div-three-lines"]}>
        <span className={styles["tiret-one"]} ref={spanRef1}> some </span>
        <span className={styles["tiret-two"]} ref={spanRef2}>thing</span>
        <span className={styles["tiret-three"]} ref={spanRef3}>soon</span> 
       
    </div>
  )
}

SLider.propTypes = {}

export default SLider
