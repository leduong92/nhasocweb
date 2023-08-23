"use client"
import { IProduct } from '@/util/constant';
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import ProductImage from '../product-image';

// async function getProducts() {
//     let res = await fetch("https://fakestoreapi.com/products");

//     return res.json()
// }



const Featured = ({ products }: { products: IProduct[] }) => {

    // const products: IProduct[] = await getProducts();
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(1);

    const listRef = useRef<HTMLDivElement>(null);

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (direction: string) => {
        let distance = listRef.current?.getBoundingClientRect().x as number;


        if (direction === "left") {
            setSlideNumber(slideNumber - 1)
            setCurrentSlide(currentSlide + 240);
        }

        if (direction === "right") {
            setSlideNumber(slideNumber + 1)
            setCurrentSlide(slideNumber * (-240));
        }
    }
    console.log(slideNumber)
    console.log(currentSlide)
    return (
        <div className='container py-3 overflow-hidden'>
            <h1 className='font-bold text-xl'>Featured Products</h1>

            <div className='flex relative'>
                <div className='absolute flex items-center top-0 bottom-0 left-0 mr-auto h-full z-10 cursor-pointer' onClick={() => handleClick("left")} >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50
                  
                    dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </span>
                </div>
                <div className='flex w-full z-0 gap-5 transition translate-x-0 duration-200 delay-100 ' style={{ transform: `translateX(${currentSlide}px)` }} >
                    {products.map((p, idx) => (
                        <Link href={`/product-detail/${p.id}`} key={p.id}
                            className='h-96 flex flex-col p-2 rounded border group hover:scale-105 transition-transform ease-out duration-200 shadow-sm cursor-pointer'
                        >
                            <div className="relative max-h-72 flex-1">
                                <ProductImage product={p} fill />
                            </div>
                            <div className="font-semibold flex items-center justify-between mt-4 mb-1">
                                <p className="w-44 truncate">{p.title}</p>
                                <p>${p.price}</p>
                            </div>
                            <p className="italic text-xs w-32 line-clamp-2 text-gray-600 truncate ...">
                                {p.description}
                            </p>

                        </Link>
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