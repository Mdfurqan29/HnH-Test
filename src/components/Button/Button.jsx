import React from 'react'
import style from './style.module.css'
const Button = ({lable , className}) => {
  return (
    <button className={className}>
{lable}
    </button>
  )
}

export default Button
