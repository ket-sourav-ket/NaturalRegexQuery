import React from 'react'
import './highlighter.css';

const Highlighter = ({children}) => {
  return (
    <span className='emph'>{children}</span>
  )
}

export default Highlighter