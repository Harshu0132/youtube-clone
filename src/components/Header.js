import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenuOpen } from '../utils/appSlice'
import SearchBar from './SearchBar'

const Header = () => {
    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenuOpen())
    }

    return (
        <div className='grid grid-flow-col m-2 p-2 shadow-lg my-auto'>
            <div className='flex col-span-2'>
                <button onClick={toggleMenuHandler}>
                    <img className="h-7 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&sz" alt="hamburger" />
                </button>

                <div className='flex items-center'>
                    <img className="h-12" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="Youtube" />
                    <h1>YouTube</h1>
                </div>
            </div>

            <SearchBar />
      
        </div>
    )
}

export default Header