import React, {memo} from 'react'
import LeftCard3 from './LeftCards/LeftCard3';
import LoginForm from './LoginForm';

const LognCard3 = ({setNextCard}) => {
  return (
    <div className="card"><LeftCard3 setNextCard ={setNextCard}/><LoginForm/></div>
  )
}

export default memo(LognCard3)