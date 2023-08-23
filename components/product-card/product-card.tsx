import { IProduct } from '@/util/constant'
import React from 'react'
import ProductImage from '../product-image'
import Link from 'next/link'
import CategoryDropdownTrigger from '../category-dropdown-menu/category-dropdown-trigger'

const ProductCard = ({ products }: { products: IProduct[] }) => {
    return (
        <>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3 my-4'>
                {products.slice(0, 4).map((p) => (
                    <Link href={`/product-detail/${p.id}`} key={p.id} className='h-96 flex flex-col p-2 rounded border group hover:scale-105 transition-transform ease-out duration-200 shadow-sm cursor-pointer '>
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
        </>
    )
}

export default ProductCard