import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'
import { handleMdOrMore } from '../helper/handleResize'

const Body = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const [isMdOrMore, setIsMdOrMore] = useState(false)

    useEffect(() => {
        handleMdOrMore(setIsMdOrMore)
    }, [isMdOrMore])

    return (
        <div className='dar'>
            <Header />
            <div className={'flex w-screen h-screen md:h-auto ' + (isMenuOpen && isMdOrMore ? " overflow-y-hidden" : " ")}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Body


