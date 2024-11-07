import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from('.rotateText2', {
            transform: 'rotateX(-80deg)',
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: '.rotateText2',
                // markers:true,
                top: 'top 50%',
                end: 'top -270%',
                scrub: 2
            }

        })
    })
    return (
        <div id='section2' className='bg-white p-5   '>
            <div className='h-full w-full rounded-[50px]  text-center'>
                <h1 className='rotateText2 text-black text-[41vw] uppercase leading-[32vw] font-[anzo4]'>HELPING</h1>
            </div>
            <div className='h-full w-full rounded-[50px]  text-center'>
                <h1 className='rotateText2 text-black text-[41vw] uppercase leading-[32vw] font-[anzo4]'>my</h1>
            </div>
            <div className='h-full w-full rounded-[50px]  text-center'>
                <h1 className='rotateText2 text-black text-[41vw] uppercase leading-[32vw] font-[anzo4]'>clients</h1>
            </div>
            <div className='h-full w-full rounded-[50px]  text-center'>
                <h1 className='rotateText2 text-black text-[41vw] uppercase leading-[32vw] font-[anzo4]'>to achieve</h1>
            </div>
            <div className='h-full w-full rounded-[50px]  text-center'>
                <h1 className='rotateText2 text-black text-[41vw] uppercase leading-[32vw] font-[anzo4]'>their</h1>
            </div>
            <div className='h-full w-full rounded-[50px]  text-center'>
                <h1 className='rotateText2 text-black text-[41vw] uppercase leading-[32vw] font-[anzo4]'>dreams!</h1>
            </div>
        </div>
    )
}

export default Page5