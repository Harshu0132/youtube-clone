import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleMdOrMore } from "../helper/handleResize"
import { closeMenu, openMenu, toggleMenuOpen } from "../utils/appSlice"
import { addSearchVideos } from "../utils/videoSlice"
import { SEARCH_LIST_BY_KEYWORD, YOUTUBE_API_KEY } from '../utils/constants'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const [isMdOrMore, setIsMdOrMore] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const youtubeCategory = useSelector((store) => store.youtubeData.youtubeCategories)

    const handleBtnClick = async (title) => {
        if (window.innerWidth < 768) dispatch(toggleMenuOpen())

        try {
            if (title.length === 0) return
            const data = await fetch(SEARCH_LIST_BY_KEYWORD + title + "&key=" + YOUTUBE_API_KEY);
            const json = await data.json()
            dispatch(addSearchVideos(json.items))
            navigate("/results?search_query=" + title)
        } catch (error) { }
    }

    useEffect(() => {
        handleMdOrMore(setIsMdOrMore)
        const resize = window.addEventListener('resize', () => handleMdOrMore(setIsMdOrMore))
        if (isMdOrMore) dispatch(closeMenu())
        else dispatch(openMenu())
        return () => window.removeEventListener('resize', resize)
    }, [isMdOrMore])


    const handleNavigation = () => {
        dispatch(toggleMenuOpen())
        navigate('/')
    }

    if (!youtubeCategory) return

    return (
        <div className={"m-2 pe-7 shadow-lg flex absolute md:relative md:h-auto h-full md:w-3/12 w-screen z-10 bg-white" + (isMenuOpen ? " block" : "  hidden")} >
            <ul>
                <li className="pb-2 ms-5">
                    <button onClick={handleNavigation}><h2 className="cursor-pointer">Home</h2></button>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[2].snippet.title)}>{youtubeCategory[2].snippet.title}</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[4].snippet.title)}>{youtubeCategory[4].snippet.title}</h2>
                </li>
                <li className="py-2 ms-5">
                    <h2 className="font-bold">Watch Later</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[7].snippet.title)}>{youtubeCategory[7].snippet.title}</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[2].snippet.title)}>{youtubeCategory[2].snippet.title}</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[4].snippet.title)}>{youtubeCategory[4].snippet.title}</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[0].snippet.title)}>{youtubeCategory[0].snippet.title}</h2>
                </li>
                <li className="py-2 ms-5">
                    <h2 className="font-bold">Subscription</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[7].snippet.title)}>{youtubeCategory[7].snippet.title}</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[2].snippet.title)}>{youtubeCategory[2].snippet.title}</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[4].snippet.title)}>{youtubeCategory[4].snippet.title}</h2>
                    <h2 className="cursor-pointer" onClick={() => handleBtnClick(youtubeCategory[0].snippet.title)}>{youtubeCategory[0].snippet.title}</h2>
                </li>



            </ul>
        </div>
    )
}

export default Sidebar