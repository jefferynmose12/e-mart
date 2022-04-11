import React from 'react'
import '../stylecomponents/Input.css'

const Input = ({label}) => {
  return (
    <div className='input'>
        <label>{label}</label>
        <input />
    </div>
  )
}

export default Input