import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from "../utils/appSlice"
import CommentBox from "./CommentBox"
import LiveChat from './LiveChat'

const WatchVideo = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeMenu())
  }, [])


  return (
    <div className='p-3 mx-5 w-screen '>
      <div className='grid grid-cols-12'>
        <div className='col-span-8  rounded-lg '>
          <iframe className='rounded-lg w-full aspect-video object-cover'
            src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='col-span-4'>
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentBox />
      </div>
    </div>
  )
}

export default WatchVideo