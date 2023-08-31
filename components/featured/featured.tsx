"use client"
import { IProduct } from '@/util/constant';
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import ProductImage from '../product-image';

const Featured = ({ products }: { products: IProduct[] }) => {

    const listRef = useRef<HTMLDivElement>(null);

    const [slideNumber, setSlideNumber] = useState<number>(0);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleClick = (direction: string) => {
        let distance = listRef.current?.offsetWidth as number;

        let windownWidth = window.innerWidth as number;

        let numberOfSlide = 0;

        if (windownWidth < 425) {
            numberOfSlide = products.length
        } else if (windownWidth > 425 && windownWidth < 850) {
            numberOfSlide = products.length - 2
        } else if (windownWidth > 851 && windownWidth < 1179) {
            numberOfSlide = products.length - 3
        } else if (windownWidth > 1180) {
            numberOfSlide = products.length - 4
        }

        if (direction === "left") {
            setSlideNumber((prev) => prev - 1)
            setCurrentSlide(currentSlide + distance);

            if (slideNumber <= 0) {
                setSlideNumber(numberOfSlide)
                setCurrentSlide(-distance * numberOfSlide);
                return;
            }
        }

        if (direction === "right") {
            if (slideNumber >= numberOfSlide) {
                setSlideNumber(0)
                setCurrentSlide(0);
                return;
            }
            setSlideNumber((prev) => prev + 1)

            setCurrentSlide(-distance * (slideNumber + 1));
        }
    }

    return (
        <div className='container py-3 overflow-hidden'>
            <h1 className='font-bold text-xl py-3'>Featured Products</h1>

            <div className='flex relative'>
                <div className='absolute flex items-center top-0 bottom-0 left-0 mr-auto h-full z-10 cursor-pointer' onClick={() => handleClick("left")} >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50
                  
                    dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </span>
                </div>
                <div className='flex w-full z-0 gap-5 transition translate-x-0 ease-in-out duration-700 delay-100 scroll-smooth' style={{ transform: `translateX(${currentSlide}px)` }} >
                    {products.map((p, idx) => (
                        <>

                            <div ref={listRef} key={p.id}
                                className=' relative flex flex-col p-2 rounded border group hover:scale-105 transition-transform ease-out duration-200 shadow-sm cursor-pointer'
                            >
                                <div className='w-full relative flex flex-row justify-between pb-2 z-10'>
                                    <span className='text-sm italic  top-2 border w-max rounded-full p-1 bg-sky-200' >Giảm {(p.originalPrice - p.price) / 1000}% </span>
                                    <div className='flex flex-col gap-3 absolute right-3 '>
                                        <button className='mr-5 invisible transition transform translate-x-12 duration-200 hover:scale-105 group-hover:translate-x-0  ease-out group-hover:visible'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                        </button>
                                        <button className='mr-5 invisible transition transform translate-x-12 duration-200 hover:scale-105 group-hover:translate-x-0  ease-out group-hover:visible'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                                <Link href={`/product-detail/${p.id}`} className='h-96 flex flex-col p-2'>
                                    <div className="relative w-[265px] max-h-64 flex-1 z-0">
                                        <ProductImage product={p} fill />
                                    </div>
                                    <div className="flex flex-col items-center justify-between mb-4 gap-4">
                                        <p className="text-[20px] w-full ">{p.metaTitle}</p>

                                        <div className="w-full flex justify-between">
                                            <p className='text-sky-400 font-bold text-lg '>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.originalPrice)}</p>
                                            <p className='italic font-mono line-through'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </>
                    ))}
                </div>

                <div className='absolute flex items-center top-0 bottom-0 right-0 mr-auto h-full z-20 cursor-pointer' onClick={() => handleClick("right")}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Featured