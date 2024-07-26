import React from 'react'

const Button = ({ data }) => {
  const { title, channelId } = data
  return (
    <button className='rounded-lg bg-gray-200 whitespace-nowrap px-4 py-2 my-2'>{title}</button>
  )
}

export default Button

