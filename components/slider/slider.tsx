
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'

type ImageProps = {
    imgUrl: string,
    base64: string,
    title: string,
    url: string
}

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images: ImageProps[] = [
        { imgUrl: "/mix/8.jpg", base64: "", title: "Granola", url: '/product-detail/1' },
        { imgUrl: "/hanhnhan/18.jpg", base64: "", title: "Hanh Nhan", url: '/product-detail/2' },
        { imgUrl: "/occho/10.jpg", base64: "", title: "Oc Cho", url: '/product-detail/3' },
        { imgUrl: "/hanhnhan/7.jpg", base64: "", title: "Mix hạt", url: '/product-detail/3' },
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className='w-screen relative overflow-hidden md:h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]'>
            <div className='flex relative overflow-hidden w-[400vw] h-full transition-all ease-in-out'>
                {images.map((img, idx) => (
                    <div key={idx} className='flex duration-700 ease-in-out w-full relative' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                        <Image
                            src={img.imgUrl}
                            title={img.title}
                            width={1448}
                            height={962}
                            alt={img.title}
                            style={{ width: '100%', height: 'auto' }}
                            sizes='100vw'
                            priority
                            className='object-cover w-screen h-full '

                        />

                        <div className='flex flex-col absolute bottom-6 left-12 text-white gap-5 md:bottom-20 md:left-24 lg:bottom-36 lg:left-64'>
                            <h1 className='font-bold text-4xl shadow-sm md:text-5xl lg:text-8xl animate-fadeTopToBottom repeat-1 '>{img.title}</h1>
                            <span className='font-thin text-2xl text-white line-clamp-1 leading-relaxed animate-fadeLeftToRight repeat-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. ?</span>
                            <button className='w-[200px] h-8 rounded border-none bg-sky-400/70 hover:bg-sky-500 active:ring-1 md:h-12 transition-all duration-700 ease-in-out animate-buttonScale '>SHOP NOW</button>
                        </div>
                    </div>

                ))}
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide} >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>

                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>

                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default Slider