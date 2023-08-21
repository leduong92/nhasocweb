"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductImageThumb = () => {
    const [selectedImg, setSelectedImg] = useState("img");

    return (
        <div className='flex flex-row gap-5'>
            <div className='basis-20'>
                <Image
                    src={`/1.jpg`}
                    alt='test'
                    title='test'
                    width={150}
                    height={150}
                    style={{ width: '100%', height: 'auto' }}
                    sizes='100vw'
                    className='object-cover cursor-pointer mb-2'
                    onClick={(e) => setSelectedImg("img")}
                />
                <Image
                    src={`/2.jpg`}
                    alt='test'
                    title='test'
                    width={150}
                    height={150}
                    style={{ width: '100%', height: 'auto' }}
                    sizes='100vw'
                    className='object-cover cursor-pointer mb-2'
                    onClick={(e) => setSelectedImg("img2")}
                />
            </div>

            <div className='basis-full'>
                <Image
                    src={`/3.jpg`}
                    alt='test'
                    title='test'
                    width={150}
                    height={800}
                    style={{ width: '100%', height: 'auto' }}
                    sizes='100vw'
                    className='object-cover cursor-pointer mb-2'
                />
            </div>
        </div>
    )
}

export default ProductImageThumb