import React, { useEffect } from 'react'
import { addCategoryVideos, addSearchVideos } from '../utils/videoSlice'
import { useDispatch } from 'react-redux'
import { SEARCH_LIST_BY_KEYWORD, YOUTUBE_API_KEY } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const Button = ({ data, isMouseScroll, setIsMouseScroll }) => {
  const { title } = data
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBtnClick = async (e) => {
    if (isMouseScroll) return
    try {
      if (title.length === 0) return
      const data = await fetch(SEARCH_LIST_BY_KEYWORD + title + "&key=" + YOUTUBE_API_KEY);
      const json = await data.json()
      dispatch(addSearchVideos(json.items))
      navigate("/results?search_query=" + title)
    } catch (error) { }
  }

  return (
    <button onClick={(e) => handleBtnClick(e)} className='rounded-lg bg-gray-200 whitespace-nowrap  px-4 py-2 my-2'>{title}</button>
  )
}

export default Button

