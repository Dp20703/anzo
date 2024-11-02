import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {

    //use to rotate the two round imgs:
    useGSAP(() => {
        gsap.to('#banner img', {
            rotate: 360,
            duration: 5,
            repeat: -1,
            ease: 'linear'
        })
    })
    return (
        <div className='absolute bottom-0 left-0 w-full flex items-end justify-between p-16 '>
            <div >
                <h2 className='text-2xl font-[anzo5]'>BRAND DESIGN | WEBSITE DESIGN</h2>
                <h3 className='text-2xl font-[anzo3] text-gray-300'>BESPOKE FREELANCE</h3>
            </div>
        </div>
    )
}

export default Page1Bottom