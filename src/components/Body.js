import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
    return (
        <>
            <Header />
            <div className='flex w-screen'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Body