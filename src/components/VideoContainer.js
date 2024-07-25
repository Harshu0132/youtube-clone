import React, { useEffect } from 'react'
import VideoCard from "./VideoCard"
import { YOUTUBE_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from '../utils/videoSlice'

const VideoContainer = () => {
    const dispatch = useDispatch()
    const youtubeData = useSelector(store => store.youtubeData.videos)

    const fetchYoutubeData = async () => {
        const data = await fetch(YOUTUBE_URL)
        const json = await data.json()
        dispatch(addVideos(json.items))
    }

    useEffect(() => {
        fetchYoutubeData()
    }, [])

    if (!youtubeData)
        return (
            <div className='box-border'>
                <Shimmer />
            </div>
        )

    return (
        <div className='flex flex-wrap'>
            {
                youtubeData.map((video, i) => <VideoCard key={video.id + i} info={video} />)
            }
        </div>
    )
}

export default VideoContainer