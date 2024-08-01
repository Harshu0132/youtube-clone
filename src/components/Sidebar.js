import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { handleMdOrMore } from "../helper/handleResize"
import { closeMenu } from "../utils/appSlice"

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const [isMdOrMore, setIsMdOrMore] = useState(false)
    const dispatch = useDispatch()


    // useEffect(() => {
    //     handleMdOrMore(setIsMdOrMore)
    //     const resize = window.addEventListener('resize', () => handleMdOrMore(setIsMdOrMore))
    //     return () => window.removeEventListener('resize', resize)
    // }, [isMdOrMore])


    return (
        <div className={"m-2 pe-7 shadow-lg flex absolute md:relative md:h-auto h-full md:w-3/12 w-screen z-10 bg-white" + (isMenuOpen ? " md:block hidden" : " md:hidden block")} >
            <ul>
                <li className="pb-2 ms-5">
                    <Link onClick={() => !isMdOrMore && dispatch(closeMenu())} to={"/"}><h2 className="cursor-pointer">Home</h2></Link>
                    <h2 className="cursor-pointer">Short</h2>
                    <h2 className="cursor-pointer">Live</h2>
                    <h2 className="cursor-pointer">Videos</h2>
                </li>
                <li className="py-2 ms-5">
                    <h2 className="font-bold">Subscription</h2>
                    <h2 className="cursor-pointer">Home</h2>
                    <h2 className="cursor-pointer">Short</h2>
                    <h2 className="cursor-pointer">Live</h2>
                    <h2 className="cursor-pointer">Videos</h2>
                </li>
                <li className="py-2 ms-5">
                    <h2 className="font-bold">Watch Later</h2>
                    <h2 className="cursor-pointer">Gaming</h2>
                    <h2 className="cursor-pointer">Music</h2>
                    <h2 className="cursor-pointer">Cricket</h2>
                    <h2 className="cursor-pointer">Songs</h2>
                </li>


            </ul>
        </div>
    )
}

export default Sidebar