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
        <div className='w-screen dark:bg-black bg-white'>
            <div className='grid grid-flow-col m-2 p-2 h-[11vh] shadow-lg my-auto'>
                <div className={'flex col-span-2' + (showSearchBar ? " hidden" : " block")}>
                    <button onClick={toggleMenuHandler}>
                        <img className="w-10 hover:bg-gray-200 rounded-full md:p-2 p-1 transition ease-linear delay-75" src="https://cdn-icons-png.flaticon.com/128/8212/8212733.png" alt="hamburger" />
                    </button>

                    <div className='flex items-center'>
                        <img className="h-14" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="Youtube" />
                        <h1 className='dark:text-white'>YouTube</h1>
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