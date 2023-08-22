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
            {isVisible && (
                <div className='flex items-center duration-700 ease-in-out hover:ease-in'>
                    <button onClick={handleScrollTop}
                        className='fixed rounded-xl bottom-24 right-5 h-12 w-8 text-center transition border-solid cursor-pointer bg-blue-300 hover:bg-blue-400 active:bg-blue-600'
                    >
                        <svg className='animate-bounce h-full w-full' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    )
}

export default GotoTop