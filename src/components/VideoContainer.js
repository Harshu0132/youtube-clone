import React, { useEffect, useRef, useState } from 'react'
import VideoCard from "./VideoCard"
import { YOUTUBE_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from '../utils/videoSlice'
import ButtonList from "./ButtonList"

const VideoContainer = () => {
    const dispatch = useDispatch()
    const pageToken = useRef(null)
    const youtubeData = useSelector(store => store.youtubeData.videos)
    const [loading] = useState(true)

    const fetchYoutubeData = async () => {
        if (pageToken.current === false) return

        const data = await fetch(YOUTUBE_URL + (pageToken.current ? "&pageToken=" + pageToken.current : ""))
        const json = await data.json()
        if (json.nextPageToken) {
            pageToken.current = json.nextPageToken
            dispatch(addVideos(json.items))
        } else {
            pageToken.current = false
        }
    }

    useEffect(() => {
        fetchYoutubeData()
    }, [])

    const handleScrollEvent = () => {
        const scrollHeight = document.documentElement.scrollHeight
        const scrollTop = document.documentElement.scrollTop
        const innerHeight = window.innerHeight

        if (scrollTop + innerHeight >= scrollHeight) {
            fetchYoutubeData()
        }
    }


    useEffect(() => {
        const scrollEvent = document.addEventListener("scroll", handleScrollEvent)
        return () => removeEventListener(scrollEvent, handleScrollEvent)
    }, [])

    if (!youtubeData)
        return (
            <div className='box-border'>
                <Shimmer />
            </div>
        )

    return (
        <div>
            
            <div className='flex flex-wrap'>
                {
                    youtubeData.map((video, i) => <VideoCard key={video.id + i} info={video} />)
                }
                {
                    loading && <Shimmer />
                }

            </div>
        </div>
    )
}

export default VideoContainer