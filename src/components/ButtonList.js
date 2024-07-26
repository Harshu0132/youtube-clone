import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { YOUTUBE_CATEGORY } from '../utils/constants'
import { useSelector } from 'react-redux'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ButtonList = () => {
    const btnList = ["All", "Movies", "Music", "Gaming", "Songs", "Funny", "Cricket"]
    const [youtubeCategory, setYoutubeCategory] = useState(null);
    const [scrollCount, setScrollCount] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0)
    // const [scrollCount, setScrollCount] = useState(0);
    const scrollRef = useRef(null)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)


    const fetchData = async () => {
        const data = await fetch(YOUTUBE_CATEGORY);
        const json = await data.json();
        setYoutubeCategory(json.items)
    }

    const handleMouseMove = (e) => {
        if (scrollRef.current.isDragging)
            scrollRef.current.scrollLeft -= e.movementX
    }

    const handleLeftClick = () => {
        setScrollCount(() => scrollRef.current.scrollLeft - 200)
        if (scrollRef.current.scrollLeft >= 5)
            scrollRef.current.scrollLeft -= 200
    }
    const handleRightClick = () => {
        setMaxWidth(() => scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
        setScrollCount(() => scrollRef.current.scrollLeft + 200)
        scrollRef.current.scrollLeft += 200
        console.log("scrollRef.current.scrollLeft", scrollRef.current.scrollLeft + 200);
    }
    useEffect(() => {
        fetchData()
    }, [])

    if (!youtubeCategory) return

    return (
        <>
            <div className={'mx-3 relative' + (isMenuOpen ? " w-[70vw]" : " w-[90vw]")}>
                <div className='flex scroll-smooth overflow-x-scroll gap-2 cursor-grab no-scroll scrollTab '
                    ref={scrollRef}
                    onMouseDown={() => scrollRef.current.isDragging = true}
                    onMouseMove={handleMouseMove}
                    onMouseUp={() => scrollRef.current.isDragging = false}
                >
                    {
                        youtubeCategory.map(data => <Button key={data.id} data={data.snippet} />)
                    }
                </div>
                <div onClick={handleLeftClick} className={'absolute top-0 h-full w-28 flex items-center bg-gradient-to-r from-white cursor-pointer' + (scrollCount >= 5 ? " block" : " hidden")}>
                    <FaChevronLeft />
                </div>
                <div onClick={handleRightClick} className={'absolute top-0 right-0 h-full w-28 flex justify-end items-center bg-gradient-to-l from-white cursor-pointer' + (scrollCount >= maxWidth ? " block" : " hidden")}>
                    <FaChevronRight />
                </div>
            </div>
        </>



    )
}

export default ButtonList