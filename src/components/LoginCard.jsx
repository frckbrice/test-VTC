import React, { useState  } from "react";
import './LoginForm.css'
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