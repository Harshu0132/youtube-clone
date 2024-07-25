import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const btnList = ["All", "Movies", "Music", "Gaming", "Songs", "Funny", "Cricket"]
    return (
        <div className='flex gap-3 py-3 px-3'>
            {
                btnList.map(btnName => <Button key={btnName} name={btnName} />)
            }
        </div>
    )
}

export default ButtonList