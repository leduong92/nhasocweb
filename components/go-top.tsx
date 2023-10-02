"use client"
import React, { useEffect, useState } from 'react'

const GotoTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    const toggleVisibility = () => {
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    })

    return (
        <>
            {isVisible ? (
                <div className='flex items-center rounded-md'>
                    <button onClick={handleScrollTop}
                        className='fixed rounded-md bottom-24 right-5 h-12 w-8 text-center cursor-pointer bg-sky-200 hover:bg-sky-400'
                    >
                        <svg className='h-full w-full text-gray-800' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                        </svg>
                    </button>
                </div>
            ) : null}
        </>
    )
}

export default GotoTop