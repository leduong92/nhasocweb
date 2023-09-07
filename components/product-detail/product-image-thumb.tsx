"use client"
import { IProduct } from '@/util/constant';
import Image from 'next/image'
import React, { useState } from 'react'

const ProductImageThumb = ({ product }: { product: IProduct }) => {
    const [selectedImg, setSelectedImg] = useState(0);

    return (
        <div className='flex flex-col gap-5 md:flex-col lg:flex-row xl:flex-row'>
            <div className='w-full h-full order-1 md:order-2 lg:flex-none lg:w-24 xl:order-1 xl:w-32'>
                <div className='flex w-24 h-24 gap-3 lg:flex-col lg:order-1 lg:w-full xl:flex-col'>
                    {product.productImages.map((img, idx) => (
                        <Image
                            key={idx}
                            src={`http://localhost:5000/${img.url}`}
                            alt='test'
                            title='test'
                            width={150}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='object-fill cursor-pointer rounded-md hover:scale-105 duration-300 delay-150 pt-1 '
                            onClick={(e) => setSelectedImg(idx)}
                        />
                    ))}
                </div>

            </div>
            <div className='w-full h-[300px] md:h-[350px] md:order-1 lg:h-[500px] lg:order-2 lg:flex-1 xl:order-2 xl:h-[600px]'>
                <Image
                    src={`http://localhost:5000/${product.productImages[selectedImg].url}`}
                    alt='test'
                    title='test'
                    width={150}
                    height={900}
                    style={{ width: '100%', height: '100%' }}
                    sizes='100vw'
                    className='object-cover cursor-pointer mb-2 rounded-md'
                />
            </div>
        </div >
    )
}

export default ProductImageThumb