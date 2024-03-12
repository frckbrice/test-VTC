import React, { useState } from "react";
import './LoginForm.css'
import LoginForm from "./LoginForm";
import LeftCard1 from "./LeftCards/LeftCard1";
import LeftCard2 from "./LeftCards/LeftCard2";
import LeftCard3 from "./LeftCards/LeftCard3";
import Wrapper from "./Wrapper";
import SLider from "./organisms/SLider";

function LoginCard() {
    const [nextLeftCard, setNextLeftCard] = useState(1);


  return (
     
    <div className="card">
        {/* <Wrapper>  */}
        {/* <LeftCard1 value={nextLeftCard}/> */}
        {/* <LeftCard2 value={nextLeftCard}/> */}
        <LeftCard3 value={nextLeftCard}/>
        {/* <SLider/> */}

        {/* </Wrapper> */}
       <LoginForm/>
      </div>
  );
}

export default LoginCard;
