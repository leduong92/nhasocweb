import { IProduct } from '@/util/constant';
import Image from 'next/image';
import React from 'react'
import FeaturedImage from './featured-image';
import Link from 'next/link';

async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");

    return res.json()
}

const Featured = async () => {

    const products: IProduct[] = await getProducts();
    // console.log(products)
    return (
        <div className='container py-3'>
            <h1>Featured Products</h1>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-6 pt-2'>
                {products.map((p) => (
                    <Link href={`/product-detail/${p.id}`} key={p.id} className='h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200 shadow-sm cursor-pointer '>
                        <div className="relative max-h-72 flex-1">
                            <FeaturedImage product={p} fill />
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
        </div>
    )
}

export default Featured