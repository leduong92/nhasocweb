"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import GridTileImage from './grid/tile';
import { IProduct } from '@/lib/model';

const ProductGallery = ({ product }: { product: IProduct }) => {
    const [selectedImg, setSelectedImg] = useState(0);

    const buttonClassName =
        'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center';
    return (
        <>
            <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
                {product.productImages[selectedImg] && (
                    <Image
                        className="h-full w-full object-contain"
                        fill
                        sizes="(min-width: 1024px) 66vw, 100vw"
                        alt={product.metaTitle}
                        src={`${process.env.BASE_IMAGE_URL}${product.productImages[selectedImg].url}` as string}
                        priority={true}
                    />
                )}

                {product.productImages.length > 1 ? (
                    <div className="absolute bottom-[15%] flex w-full justify-center">
                        <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
                            <button
                                aria-label="Previous product image"
                                className={buttonClassName}
                                onClick={(e) => setSelectedImg(selectedImg === 0 ? product.productImages.length - 1 : selectedImg - 1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path></svg>
                            </button>
                            <div className="mx-1 h-6 w-px bg-neutral-500"></div>
                            <button
                                aria-label="Next product image"
                                className={buttonClassName}
                                onClick={(e) => setSelectedImg(selectedImg + 1 < product.productImages.length ? selectedImg + 1 : 0)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>

            {product.productImages.length > 1 ? (
                <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
                    {product.productImages.map((image, index) => {
                        const isActive = index === selectedImg;

                        return (
                            <li key={index} className="h-20 w-20">
                                <div
                                    aria-label="Enlarge product image"
                                    className="h-full w-full cursor-pointer"
                                    onClick={(e) => setSelectedImg(index)}
                                >
                                    <GridTileImage
                                        alt={image.caption}
                                        src={`${process.env.BASE_IMAGE_URL}${image.url}`}
                                        width={80}
                                        height={80}
                                        active={isActive}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </>
    )
}

export default ProductGallery