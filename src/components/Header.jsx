import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
    return (
        <>
            <div className='w-full z-10 flex py-20 px-10 fixed items-center justify-end '>
                <button className='border-4 hover:bg-gray-400 bg-black py-3 px-10 text-lg mt-2 rounded-full '>Hire Me</button>
                <i className="ri-menu-line text-4xl ml-4 mt-2"></i>
            </div>
        </>
    )
}

export default Header