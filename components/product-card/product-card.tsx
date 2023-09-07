import { IProduct } from '@/util/constant'
import React from 'react'
import ProductImage from '../product-image'
import Link from 'next/link'

const ProductCard = ({ products }: { products: IProduct[] }) => {
    return (
        <>
            <div className='grid grid-flow-row grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 gap-y-8 gap-x-3 my-4'>
                {products.map((p) => (
                    <div key={p.id}
                        className='relative flex flex-col p-2 rounded border group hover:scale-105 transition-transform ease-out duration-200 shadow-sm cursor-pointer'
                    >
                        <div className='w-full relative flex flex-row justify-between pb-2 z-10'>
                            <span className='text-sm italic  top-2 border w-max rounded-full p-1 bg-sky-200' >Giảm {(p.originalPrice - p.price) / 1000}% </span>
                        </div>
                        <Link href={`/product-detail/${p.id}`} className='h-96 flex flex-col p-2'>
                            <div className="relative  max-h-64 flex-1 z-0">
                                <ProductImage product={p} fill />
                            </div>
                            <div className="flex flex-col items-center justify-between mb-4 gap-4">
                                <p className="text-[20px] w-full ">{p.metaTitle}</p>

                                <div className="w-full flex justify-between">
                                    <p className='text-sky-400 font-bold text-lg '>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.originalPrice)}</p>
                                    <p className='italic font-mono line-through'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}</p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <button className='w-full h-9 bg-sky-300 hover:bg-sky-400 transition-all transform duration-300 delay-100 text-white active:ring-2'>Thêm giỏ hàng</button>
                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCard