import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from "../utils/appSlice"
import CommentBox from "./CommentBox"
import LiveChat from './LiveChat'
import { WatchVideoShimmer } from './Shimmer'

const WatchVideo = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className='p-3 md:mx-5 mx-0 w-screen'>
      <div className='grid grid-cols-12'>
        <div className='md:col-span-8 col-span-12 md:h-[28rem] h-full bg-gray-950 relative rounded-lg '>
          {
            loading && (
              <div className='absolute inset-0 flex items-center justify-center'>
                <WatchVideoShimmer />
              </div>
            )
          }
          <iframe className='rounded-lg w-full aspect-video object-contain' onLoad={(e) => setLoading((prev) => !prev)}
            src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='md:col-span-4 col-span-12'>
          <LiveChat />
        </div>
      </div>
      <div className='md:w-full w-screen overflow-x-scroll md:overscroll-y-auto'>
        <CommentBox />
      </div>
    </div>
  )
}

export default WatchVideo