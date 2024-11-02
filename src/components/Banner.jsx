import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Banner = () => {
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
        <>
            <div id='banner' className='z-10  h-screen   absolute   flex   flex-col justify-end items-end p-20  bottom-0 right-5'>
                <img className='mb-10' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
                <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
            </div>
        </>
    )
}

export default Banner