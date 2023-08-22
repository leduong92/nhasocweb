"use client"
import { IProduct } from '@/util/constant'
import Image from 'next/image'
import React, { useState } from 'react'

type ProductImageProps = {
    product: IProduct,
    fill?: boolean
}

const ProductImage = ({ product, fill }: ProductImageProps) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {fill ? (
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                        }}`}
                    sizes='100vw'
                    onLoadingComplete={() => setLoading(false)}
                    priority
                />
            ) : (
                <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={1000}
                    style={{ width: '100%', height: 'auto' }}
                    sizes='100vw'
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                        }}`}
                    onLoadingComplete={() => setLoading(false)}
                    priority
                />
            )}
        </>
    )
}

export default ProductImage