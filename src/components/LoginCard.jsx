import React, { useContext,useState, useEffect  } from "react";
import './LoginForm.css'
import LoginForm from "./LoginForm";
import LeftCard1 from "./LeftCards/LeftCard1";
import LeftCard2 from "./LeftCards/LeftCard2";
import LeftCard3 from "./LeftCards/LeftCard3";
import { LogContext } from "./context";
import LognCard1 from "./LognCard1";
import LognCard2 from "./LognCard2";
import LognCard3 from "./LognCard3";

function LoginCard() {
    // const {nextCard, setNextCard} = useContext(LogContext)
    const [nextCard, setNextCard] = useState("A");
    console.log("nextcard:", nextCard)

  return (
    <div> 
      {nextCard === "A" && <LognCard1 setNextCard ={setNextCard} nextCard={nextCard}/>}
      {nextCard === "B" && <LognCard2 setNextCard ={setNextCard}/>}

      {nextCard === "C" && <LognCard3 setNextCard ={setNextCard}/>}
    </div>
  
  )
}

export default LoginCard;