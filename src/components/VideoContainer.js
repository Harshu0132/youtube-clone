import React, { useEffect, useRef, useState } from 'react'
import VideoCard from "./VideoCard"
import { YOUTUBE_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { useDispatch, useSelector } from 'react-redux'
import { addVideos, appendVideos } from '../utils/videoSlice'
import { handleMdOrMore } from '../helper/handleResize'

const VideoContainer = () => {
    const dispatch = useDispatch()
    // const pageToken = useRef(null)
    const youtubeData = useSelector(store => store.youtubeData.videos)
    const youtubeDataRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [isMdOrMore, setIsMdOrMore] = useState(false)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const [pageToken, setPageToken] = useState(null)
    const pageTokenRef = useRef(null)

    const fetchYoutubeData = async () => {
        try {
            if (pageToken !== pageTokenRef.current) return
            const data = await fetch(YOUTUBE_URL + (pageToken ? "&pageToken=" + pageToken : ""))
            const json = await data.json()
            if (json.nextPageToken) {
                if (pageToken === null) dispatch(addVideos(json.items))
                else dispatch(appendVideos(json.items))
                setPageToken(json.nextPageToken)
            } else {
                setPageToken(false)
            }
            setLoading(() => false)
        } catch (error) {
        }
    }

    const handleScrollEvent = () => {
        const scrollHeight = document.documentElement.scrollHeight
        const scrollTop = document.documentElement.scrollTop
        const innerHeight = window.innerHeight
        if (scrollTop + innerHeight >= scrollHeight - 176) {
            if (pageTokenRef.current === false) return
            setLoading(() => true)
            youtubeDataRef.current = setTimeout(() => {
                fetchYoutubeData()
            }, 400);
        }
    }

    useEffect(() => {
        pageTokenRef.current = pageToken
    }, [pageToken])

    useEffect(() => {
        fetchYoutubeData()
    }, [])

    useEffect(() => {
        handleMdOrMore(setIsMdOrMore)
    }, [isMdOrMore])

    useEffect(() => {
        if (isMdOrMore) {
            !isMenuOpen && document.addEventListener('scroll', handleScrollEvent)
        } else {
            document.addEventListener('scroll', handleScrollEvent)
        }

        return () => {
            document.removeEventListener('scroll', handleScrollEvent)
            clearTimeout(youtubeDataRef.current)
        }
    }, [isMenuOpen])

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