"use client"
import { IProduct } from '@/util/constant'
import { useRouter } from 'next/navigation'
import React from 'react'

const ShopNowButton = ({ product }: { product: IProduct }) => {

    const router = useRouter()

    return (
        <button className="absolute border-none bg-sky-300 p-2  transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-sky-400 active:ring-2
                                    group-hover:translate-x-0
                                    "
            onClick={() => router.push(`/product-detail/${product.id}`)}
        >Shop now</button>
    )
}

export default ShopNowButton