"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductImageThumb = () => {
    const [selectedImg, setSelectedImg] = useState(0);

    const images = [
        "/1.jpg",
        "/2.jpg",
    ]

    return (
        <div className='flex flex-row gap-5'>
            <div className='flex-none w-32'>

                {images.map((img, idx) => (
                    <Image
                        key={idx}
                        src={img}
                        alt='test'
                        title='test'
                        width={150}
                        height={150}
                        style={{ width: '100%', height: 'auto' }}
                        sizes='100vw'
                        className='object-cover cursor-pointer rounded-md hover:scale-105 duration-300 delay-150 pt-1'
                        onClick={(e) => setSelectedImg(idx)}
                    />
                ))}

            </div>

            <div className='flex-1 w-full'>
                <Image
                    src={images[selectedImg]}
                    alt='test'
                    title='test'
                    width={150}
                    height={800}
                    style={{ width: '100%', height: '100%' }}
                    sizes='100vw'
                    className='object-cover cursor-pointer mb-2 rounded-md'
                />
            </div>
        </div >
    )
}

export default ProductImageThumb