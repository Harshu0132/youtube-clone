import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ info }) => {
  const { thumbnails, channelTitle, title } = info.snippet
  return (
    <div className='w-80 px-3 my-4 '>
      <div className='cursor-pointer'>
        <Link to={"/watch?v=" + info.id}>
          <img className='rounded-lg object-cover' src={thumbnails.medium.url} alt="" />
          <h1 className='font-bold'>{title}</h1>
          <h2 className='text-gray-600'>{channelTitle}</h2>
          <h2 className='text-gray-600'>{info.statistics.viewCount} Views</h2>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard

export const SearchVideoCard = ({ info }) => {
  const { thumbnails, channelTitle, title, description } = info.snippet
  const { videoId } = info.id
  return (
    <div className=' px-3 my-4'>
      <div className='cursor-pointer'>
        <Link to={"/watch?v=" + videoId}>
          <div className='flex'>
            <img className='rounded-lg object-cover' src={thumbnails.medium.url} alt="thumbnail" />
            <div className='p-4'>
              <h1 className='font-bold'>{title}</h1>
              <h2 className='text-gray-600 text-md'>{channelTitle}</h2>
              <p className='text-sm'>{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}