import React from 'react'

const Button = (props) => {
  return(
    <button className='bg-blue-800 rounded w-20 h-7 text-white hover:bg-blue-600 '>
    {props.children}
    </button>
  )
}

export default Button