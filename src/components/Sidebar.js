import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if (!isMenuOpen) return

    return (
        <div className="m-2 pe-7 shadow-lg flex w-3/12">
            <ul>
                <li className="pb-2 ms-5">
                    <Link to={"/"}><h2 className="cursor-pointer">Home</h2></Link>
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