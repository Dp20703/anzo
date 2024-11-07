import React from 'react'

const Page6 = () => {
    return (
        <div className='bg-white relative p-5 h-screen overflow-hidden '>
            <div className='h-full w-full bg-black rounded-[50px] overflow-hidden '>
                <video autoPlay loop muted className='h-full w-full  object-cover' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/1080p/mp4/file.mp4"></video>
                <h1 className='absolute bottom-[-8rem] text-[40vw] left-24 font-[anzo4] uppercase'>About</h1>
            </div>
        </div>
    )
}

export default Page6