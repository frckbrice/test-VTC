import React, { useState,useEffect } from "react";
import './LoginForm.css'
import LoginForm from "./LoginForm";
import LeftCard1 from "./LeftCards/LeftCard1";
import LeftCard2 from "./LeftCards/LeftCard2";
import LeftCard3 from "./LeftCards/LeftCard3";
import Wrapper from "./Wrapper";
import SLider from "./organisms/SLider";

function LoginCard() {
    const [nextLeftCard, setNextLeftCard] = useState(1);
    const [toShow, setToshow]=useState(null);

    useEffect(()=>{
        console.log(nextLeftCard)
           
    },[nextLeftCard])

  return (
     
    <div className="card">
        {nextLeftCard === 1 && <LeftCard1 setNextLeftCard={setNextLeftCard} nextLeftCard={nextLeftCard}/> }
        {nextLeftCard === 2 && <LeftCard2  setNextLeftCard={setNextLeftCard} nextLeftCard={nextLeftCard}/>}
        {nextLeftCard === 3 && <LeftCard3  setNextLeftCard={setNextLeftCard} nextLeftCard={nextLeftCard}/>}
       <LoginForm/>
      </div>
  );
}

export default LoginCard;
{} 