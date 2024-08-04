import React, { useRef, useState } from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import useYoutubeCategory from '../hooks/useYoutubeCategory'

const ButtonList = () => {
    // const [youtubeCategory, setYoutubeCategory] = useState(null);
    const youtubeCategory = useSelector((store) => store.youtubeData.youtubeCategories)
    const [scrollCount, setScrollCount] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0)
    const scrollRef = useRef(null)
    const [isMouseScroll, setIsMouseScroll] = useState(true)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const [mouseDownPos, setMouseDownPos] = useState({ x: 0, y: 0, time: 0 })

    useYoutubeCategory()

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
            setIsMouseScroll(() => true)
            scrollRef.current.scrollLeft -= e.movementX
            setScrollCount(() => scrollRef.current.scrollLeft - e.movementX)
            setMaxWidth(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
        }
    }

    const handleMouseUp = (e) => {
        const distanceMoved = Math.abs(e.clientX - mouseDownPos.x) + Math.abs(e.clientY - mouseDownPos.y)
        const timeElapsed = new Date().getTime() - mouseDownPos.time
        scrollRef.current.isDragging = false

        // Consider it a click if less than 200 ms passed and little movement occurred
        if (timeElapsed < 200 && distanceMoved < 5) {
            setIsMouseScroll(false)
        } else {
            setIsMouseScroll(true)
        }
    }

    if (!youtubeCategory) return

    return (
        <>

            <div className={'mx-3 relative ' + (isMenuOpen ? " md:w-[70vw] w-[80vw]" : " md:w-[90vw] ")}>
                <div className={'flex overflow-x-scroll gap-3 cursor-grab no-scroll'}
                    ref={scrollRef}
                    onMouseDown={(e) => {
                        setMouseDownPos({ x: e.clientX, y: e.clientY, time: new Date().getTime() })
                        scrollRef.current.isDragging = true
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        scrollRef.current.isDragging = false
                    }}
                    onMouseUp={(e) => {
                        handleMouseUp(e)
                    }}
                >
                    {
                        youtubeCategory.map(data => <Button isMouseScroll={isMouseScroll} setIsMouseScroll={setIsMouseScroll} key={data.id} data={data.snippet} />)
                    }
                </div>
                <div className={'absolute top-0 h-full w-28 flex items-center bg-gradient-to-r from-white dark:from-slate-950 cursor-pointer' + (scrollCount >= 5 ? " md:flex hidden" : " hidden")}>
                    <FaChevronLeft className='p-2 h-7 w-7 rounded-full hover:bg-slate-300' onClick={handleLeftClick} />
                </div>
                <div className={'absolute top-0 right-0 h-full w-28 flex justify-end items-center bg-gradient-to-l from-white dark:from-slate-950 cursor-pointer' + (scrollCount <= maxWidth ? " md:flex hidden" : " hidden")}>
                    <FaChevronRight className='p-2 h-7 w-7 rounded-full hover:bg-slate-300' onClick={handleRightClick} />
                </div>
            </div>
        </>
    )
}

export default ButtonList