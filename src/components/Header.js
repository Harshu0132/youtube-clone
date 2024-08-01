import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenuOpen } from '../utils/appSlice'
import SearchBar from './SearchBar'
import { IoArrowBack, IoSearchOutline } from 'react-icons/io5'

const Header = () => {
    const dispatch = useDispatch()
    const [showSearchBar, setShowSearchBar] = useState(false)

    const toggleMenuHandler = () => {
        dispatch(toggleMenuOpen())
    }


    return (
        <div className='w-screen'>
            <div className='grid grid-flow-col m-2 p-2 h-[10vh] shadow-lg my-auto'>
                <div className={'flex col-span-2' + (showSearchBar ? " hidden" : " block")}>
                    <button onClick={toggleMenuHandler}>
                        <img className="h-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&sz" alt="hamburger" />
                    </button>

                    <div className='flex items-center'>
                        <img className="h-12" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="Youtube" />
                        <h1>YouTube</h1>
                    </div>
                </div>
                <div className={'flex col-span-2 cursor-pointer' + (showSearchBar ? " block" : " hidden")}>
                    <IoArrowBack className='w-6 h-auto' onClick={() => setShowSearchBar(!showSearchBar)} />
                </div>


                <SearchBar showSearchBar={showSearchBar} />
                <button onClick={() => setShowSearchBar(!showSearchBar)} className={'md:hidden block flex items-center justify-end mr-4' + (!showSearchBar ? " block" : " hidden")}>
                    <IoSearchOutline className='w-6 h-auto' />
                </button>
            </div>
        </div>

    )
}

export default Header