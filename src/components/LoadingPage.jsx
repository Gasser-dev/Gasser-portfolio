import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const LoadingPage = () => {
    useGSAP(() => {
        const tl1 = gsap.timeline();
        tl1.to("#square1", {
            rotation: 90, delay: 1, duration: 1, repeat: 2
        })
        tl1.fromTo(
            ["#text","#textContainer"],
            { opacity: 0, width: "0%", },
            { opacity: 1, width: "auto", duration: 1 },
            "+=0.5");

    })

    return (
        <>
            <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center gap-3">
                <div id="square1" className="w-12 h-12 border-4 border-red-400"></div>
                <div id='textContainer' className="flex justify-center items-center w-auto">
                    <p id="text" className="text-white whitespace-nowrap">Welcome to my Portfolio 😇</p>
                </div>
            </div>

        </>
    )
}

export default LoadingPage