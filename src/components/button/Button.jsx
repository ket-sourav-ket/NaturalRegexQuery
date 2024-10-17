import React from 'react'
import './button.css';

const Button = (props) => {
  return (
    <div className='button-container'>
    <button type="button" onClick={props.onPress}>{props.children}</button>
    </div>
  )
}

export default Button