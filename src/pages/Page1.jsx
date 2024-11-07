import React, { useRef, useState } from 'react'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TiltText from '../components/TiltText';

const Page1 = () => {
    const tiltRef = useRef(null);
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)

    //It will called when the mouse move on the page:
    const mouseMoving = (e) => {
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - (tiltRef.current.getBoundingClientRect().width / 2)) / 20)
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - (tiltRef.current.getBoundingClientRect().height / 2)) / 8)
        // console.log(e.clientX,e.clientY)
        // console.log(tiltRef.current.getBoundingClientRect().x)
        // console.log(tiltRef.current.getBoundingClientRect().y)
        // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
    }

    //use to tilt the text:
    useGSAP(() => {
        gsap.to(tiltRef.current, {
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 5,
            ease:'power4.out',
        })
    }, [xVal, yVal])
    return (
        <div className=' h-screen bg-white py-4 px-4 ' onMouseMove={(e) => {
            mouseMoving(e)
        }}>
            <div id='page-in' className=" p-20 h-full bg-cover rounded-[40px] shadow-xl shadow-gray-500 bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1854,h_885,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]">
                <img className='h-24' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="no-img" />
               <TiltText tiltRef={tiltRef}/>
                <Page1Bottom />
            </div>
        </div>
    )
}

export default Page1