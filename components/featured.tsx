import { IProduct } from '@/util/constant';
import Image from 'next/image';
import React from 'react'
import ProductImage from './product-image';

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
                    <div key={p.id} className='h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200 shadow-sm '>
                        {/* <div className='flex flex-col gap-5 p-1 h-full'>

                            <Image
                                src={p.image}
                                alt={p.title}
                                title={p.title}
                                width={280}
                                height={250}
                                style={{ width: '100%', height: 'auto' }}
                                sizes='100vw'
                                objectFit='contain'
                                className='relative overflow-hidden z-0'
                            />
                            <div>

                            </div>
                        </div> */}
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

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured