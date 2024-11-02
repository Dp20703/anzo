import React from 'react'

const Banner = () => {
    return (
        <>
            <div id='banner' className='h-screen w-full fixed z-10  flex   flex-col justify-end items-end p-20 '>
                <img className='mb-10' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
                <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
            </div>
        </>
    )
}

export default Banner