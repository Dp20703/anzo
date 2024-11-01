import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {
    //Use to register the gsap scrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    //Use to rotate the Texts:
    useGSAP(() => {
        gsap.from('.rotateText', {
            transform: 'rotateX(-80deg)',
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: '.rotateText',
                // markers:true,
                top: 'top 50%',
                end: 'top -270%',
                scrub: 2
            }
        })
    });
    return (
        <div id='section2' className='text-black text-center p-10 bg-white'>
            <h3 className='text-gray-500 text-2xl font-[anzo3]'>©  anzo.studio 2024 | designed and developed</h3>
            <div className='mt-40'>
                <h1 className='rotateText uppercase leading-[32vw] text-black font-[anzo4] text-[41vw]'>IMPACTFUL</h1>
            </div>
            <div>
                <h1 className='rotateText uppercase leading-[32vw] text-black font-[anzo4] text-[41vw]'>DESIGN</h1>
            </div>
            <div>
                <h1 className='rotateText uppercase leading-[32vw] text-black font-[anzo4] text-[41vw]'>IS THE</h1>
            </div>
            <div>
                <h1 className='rotateText uppercase leading-[32vw] text-black font-[anzo4] text-[41vw]'>DESIGN</h1>
            </div>
            <div>
                <h1 className='rotateText uppercase leading-[32vw] text-black font-[anzo4] text-[41vw]'>THAT</h1>
            </div>
            <div>
                <h1 className='rotateText uppercase leading-[32vw] text-black font-[anzo4] text-[41vw]'>WORKS</h1>
            </div>
        </div>
    )
}

export default Page2