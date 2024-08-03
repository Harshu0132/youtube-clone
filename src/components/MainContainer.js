import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="md:w-screen w-screen bg-white z-10 dark:bg-slate-950 px-5">
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer