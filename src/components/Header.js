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
        <div className='grid grid-flow-col m-2 p-2 shadow-lg'>
            <div className='flex col-span-2'>
                <button onClick={toggleMenuHandler}>
                    <img className="h-7 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&sz" alt="hamburger" />
                </button>

                <img className="h-7 px-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Youtube" />

            </div>

            <SearchBar />
            <div className='col-span-2'>
                <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AJM9wkP__z2M-hovSAWcTb_9XJ6smy3NKw&s" alt="Profile" />
            </div>
        </div>
    )
}

export default Header