import React from 'react'

const Page4 = () => {
    return (
        <div className='bg-white py-10 px-5 h-screen relative '>
            <div className='relative p-10 h-full shadow-xl shadow-gray-500 bg-cover flex items-center justify-around bg-black rounded-[50px] overflow-hidden'>
                <div>
                    <div className="text">
                        <h3 className='text-[20vw] leading-[16vw] tracking-wide uppercase text-[#9B9B9B] font-[anzo4]'>what</h3>
                        <h3 className='text-[20vw] leading-[16vw] tracking-wide uppercase  font-[anzo4]'>i do</h3>
                    </div>
                    <div className="text2 p-5 ">
                        <h4 className='uppercase font-[anzo5] text-xl leading-snug  '>I DESIGN AND DEVELOP</h4>
                        <h4 className='uppercase font-[anzo3] text-xl leading-snug'> MODERN, IMPACTFUL AND LUXURIOUS</h4>
                        <h4 className='lowercase font-[anzo5] text-xl leading-snug'> websites that seamlessly bridge your goals with needs of your clients.</h4>
                    </div>
                </div>
                <div className="video rounded-xl h-[90vh] overflow-hidden mb-5 b">
                    <video autoPlay loop muted className='h-full w-full object-cover' src="https://cdn.pixabay.com/video/2020/06/09/41559-428049063_large.mp4"></video>
                </div>
            </div>
        </div>
    )
}

export default Page4
