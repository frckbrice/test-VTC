import React from 'react'
import PropTypes from 'prop-types'
import './LoginForm.css'

const Wrapper = ({children}) => {
  return (
    <div className='left-card-wrapper'>
        {children}
    </div>
  )
}

Wrapper.propTypes = {}

export default Wrapper