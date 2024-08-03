import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'
import { handleMdOrMore } from '../helper/handleResize'

const Body = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const [isMdOrMore, setIsMdOrMore] = useState(false)
    const isDarkMode = useSelector(store => store.app.isDarkMode)

    useEffect(() => {
        handleMdOrMore(setIsMdOrMore)
    }, [isMdOrMore])

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <Header />
            <div className={'flex w-screen  md:h-auto dark:text-white dark:bg-slate-950' + (isMenuOpen && isMdOrMore ? " h-screen overflow-y-hidden" : " ")}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Body


