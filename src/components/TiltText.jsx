import React from 'react'

const TiltText = ({ tiltRef }) => {
    return (
        <>
            <div id='tiltdiv' ref={tiltRef} className='mt-40'>
                <h1 className='text-[4.2vw] font-[anzo5] leading-[4vw]'>I AM <span className='text-black font-[anzo1]'>DARK MODE</span>™</h1>
                <h1 className='text-[8.2vw] font-[anzo2] leading-[7vw]'>DESIGNER</h1>
                <h1 className='text-[4.2vw] font-[anzo5] leading-[4vw]'>TO HIRE</h1>
            </div>

        </>
    )
}

export default TiltText