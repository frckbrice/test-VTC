import React from 'react'
import PropTypes from 'prop-types'

const Button = () => {

    const styles = {
        color:"orange",
        fontSize: 14, 
        fontWeight:"bold", 
        backgroundColor:"transparent",
        border:"none",
    }
  return (
    <button style={styles}> <span>←</span> Back</button>
  )
}

Button.propTypes = {}

export default Button