import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ data, isMouseScroll }) => {
  const { title } = data
  const navigate = useNavigate()
  const handleBtnClick = async (e) => {
    if (isMouseScroll) return
    try {
      if (title.length === 0) return
      navigate("/results?search_query=" + title)
    } catch (error) { }
  }

  return (
    <button onClick={(e) => handleBtnClick(e)} className='rounded-lg bg-gray-200 dark:bg-slate-900  whitespace-nowrap  px-4 py-2 my-2'>{title}</button>
  )
}

export default Button

