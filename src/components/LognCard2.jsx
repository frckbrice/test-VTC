import React, {useEffect, memo} from 'react'
import LeftCard2 from './LeftCards/LeftCard2';
import LoginForm from './LoginForm';

const LognCard2 = ({setNextCard}) => {


    //  useEffect(() => {
      
    //   if(nextCard===2)
    //     setNextCard(2)
    
    // },[nextCard, setNextCard])
  return (
    <div className="card"><LeftCard2 setNextCard ={setNextCard}/><LoginForm/></div>
  )
}

export default memo(LognCard2)