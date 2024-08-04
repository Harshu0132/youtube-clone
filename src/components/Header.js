import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode, toggleMenuOpen } from '../utils/appSlice'
import SearchBar from './SearchBar'
import { IoArrowBack, IoSearchOutline } from 'react-icons/io5'

const Header = () => {
    const dispatch = useDispatch()
    const [showSearchBar, setShowSearchBar] = useState(false)
    const isDarkMode = useSelector(store => store.app.isDarkMode)

    const toggleMenuHandler = () => {
        dispatch(toggleMenuOpen())
    }

    const handleDarkMode = () => {
        dispatch(toggleDarkMode())
    }

    return (
        <div className='w-screen dark:bg-gray-950 bg-white'>
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
                    <IoArrowBack className='w-6 h-auto dark:text-white' onClick={() => setShowSearchBar(!showSearchBar)} />
                </div>
                <SearchBar showSearchBar={showSearchBar} />
                <button onClick={() => setShowSearchBar(!showSearchBar)} className={'md:hidden block flex items-center justify-end mr-4' + (!showSearchBar ? " block" : " hidden")}>
                    <IoSearchOutline className='w-6 h-auto dark:text-slate-400' />
                </button>
                <div className='mx-auto my-auto'>
                    <button className='hover:bg-slate-800 p-1 rounded-full' onClick={handleDarkMode}>
                        {
                            isDarkMode ?
                                <svg id='dark' viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-sky-500"></path>
                                </svg>
                                :
                                <svg id='light' viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-sky-500"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-sky-500"></path></svg>
                        }
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header