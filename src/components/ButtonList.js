import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { YOUTUBE_CATEGORY } from '../utils/constants'
import { useSelector } from 'react-redux'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ButtonList = () => {
    const [youtubeCategory, setYoutubeCategory] = useState(null);
    const [scrollCount, setScrollCount] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0)
    const scrollRef = useRef(null)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    const fetchData = async () => {
        const data = await fetch(YOUTUBE_CATEGORY);
        const json = await data.json();
        setYoutubeCategory(json.items)  
    }

    const handleLeftClick = () => {
        scrollRef.current.classList.add("scroll-smooth")
        setScrollCount(() => scrollRef.current.scrollLeft - 200)
        if (scrollRef.current.scrollLeft >= 5)
            scrollRef.current.scrollLeft -= 200
    }

    const handleRightClick = () => {
        scrollRef.current.classList.add("scroll-smooth")
        setMaxWidth(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
        setScrollCount(() => scrollRef.current.scrollLeft + 200)
        scrollRef.current.scrollLeft += 200
    }   

    const handleMouseMove = (e) => {
        scrollRef.current.classList.remove("scroll-smooth")
        if (scrollRef.current.isDragging) {
            scrollRef.current.scrollLeft -= e.movementX
            setScrollCount(() => scrollRef.current.scrollLeft - e.movementX)
            setMaxWidth(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    useEffect(() => { }, [])

    if (!youtubeCategory) return

    return (
        <>
            <div className={'mx-3 relative ' + (isMenuOpen ? " w-[70vw]" : " w-[90vw]")}>
                <div className={'flex overflow-x-scroll gap-3 cursor-grab no-scroll scrollTab'}
                    ref={scrollRef}
                    onMouseDown={() => scrollRef.current.isDragging = true}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => scrollRef.current.isDragging = false}
                    onMouseUp={() => scrollRef.current.isDragging = false}
                >
                    {
                        youtubeCategory.map(data => <Button  key={data.id} data={data.snippet} />)
                    }
                </div>
                <div className={'absolute top-0 h-full w-28 flex items-center bg-gradient-to-r from-white  cursor-pointer' + (scrollCount >= 5 ? " block" : " hidden")}>
                    <FaChevronLeft className='p-2 h-7 w-7 rounded-full hover:bg-slate-300' onClick={handleLeftClick} />
                </div>
                <div className={'absolute top-0 right-0 h-full w-28 flex justify-end items-center bg-gradient-to-l from-white cursor-pointer' + (scrollCount <= maxWidth ? " block" : " hidden")}>
                    <FaChevronRight className='p-2 h-7 w-7 rounded-full hover:bg-slate-300' onClick={handleRightClick} />
                </div>
            </div>
        </>
    )
}

export default ButtonList