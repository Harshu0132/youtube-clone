import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ info }) => {
  const { thumbnails, channelTitle, title } = info.snippet
  return (
    <div className='w-80 px-3 my-4'>
      <div className='cursor-pointer dark:bg-slate-900 h-full rounded-lg'>
        <Link to={"/watch?v=" + info.id}>
          <img className='rounded-lg object-cover dark:p-2' src={thumbnails.medium.url} alt="" />
          <div className='dark:m-2'>
            <h1 className='font-bold break-words text-wrap'>{title.split(",").join(', ')}</h1>
            <h2 className='text-gray-600 dark:text-gray-400'>{channelTitle}</h2>
            <h2 className='text-gray-600 dark:text-gray-400'>{info.statistics.viewCount} Views</h2>
          </div>
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
    <div className='px-3 my-4'>
      <div className='cursor-pointer'>
        <Link to={"/watch?v=" + videoId}>
          <div className='flex md:flex-row flex-col bg-gray-100 md:bg-white dark:bg-slate-800 rounded-lg'>
            <img className='rounded-lg object-cover md:p-0 p-3' src={thumbnails.medium.url} alt="thumbnail" />
            <div className='p-4'>
              <h1 className='font-bold'>{title}</h1>
              <h2 className='text-gray-600 text-md dark:text-slate-200'>{channelTitle}</h2>
              <p className='text-sm dark:text-slate-400'>{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}