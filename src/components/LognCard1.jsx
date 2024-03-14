import React, { memo } from 'react'
import LeftCard1 from './LeftCards/LeftCard1';
import LoginForm from './LoginForm';

const LognCard1 = ({nextCard, setNextCard}) => {

    // console.log("logncard: ", props)

  return (
    <div className="card"><LeftCard1 setNextCard ={setNextCard} nextCard={nextCard}/><LoginForm/></div>
  )
}

export default memo(LognCard1)