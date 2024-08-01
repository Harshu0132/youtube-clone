import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'

const Body = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    return (
        <div className='dar'> 
            <Header />
            <div className={'flex w-screen h-screen md:h-auto ' + (!isMenuOpen ? " overflow-y-hidden" : " ")}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Body


