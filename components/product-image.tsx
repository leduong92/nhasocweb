"use client"
import { IProduct } from '@/util/constant'
import Image from 'next/image'
import React, { useState } from 'react'

type ProductImageProps = {
    product: IProduct,
    fill?: boolean,
    src?: string
}

const ProductImage = ({ product, fill, src }: ProductImageProps) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {product.productImages && fill ? (
                <Image
                    src={src ? src : `${process.env.BASE_IMAGE_URL}${product.productImages[0]?.url}`}
                    alt={product.metaTitle}
                    fill
                    className={`object-cover duration-700 ease-in-out group-hover:opacity-75 ${loading
                        ? "scale-90 blur-xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                        }}`}
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    onLoadingComplete={() => setLoading(false)}
                />
            ) : (
                <Image
                    src={`/logo.svg`}
                    alt={product.metaTitle}
                    width={400}
                    height={1000}
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover duration-700 ease-in-out group-hover:opacity-75 ${loading
                        ? "scale-90 blur-xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                        }}`}
                    onLoadingComplete={() => setLoading(false)}
                />
            )}
        </>
    )
}

export default ProductImage