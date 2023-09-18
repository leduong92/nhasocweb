import { IProduct } from '@/util/constant'
import Image from 'next/image'
import React from 'react'
import ShopNowButton from './shop-now'
import ProductImage from '../product-image'

const NewProduct = ({ products }: { products: IProduct[] }) => {

    return (
        <div className="container">
            <h1 className='font-bold text-3xl py-3'>Sản phẩm mới</h1>

            <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">

                {products.map((itm) => (
                    <div key={itm.id} className="group relative flex items-center justify-center h-72 ">
                        {/* <Image
                            src={`${process.env.BASE_IMAGE_URL}${itm.productImages.find(x => x.isDefault === true)?.url}`}
                            alt={itm.displayName}
                            title={itm.displayName}
                            fill
                            style={{ width: '100%', height: '100%' }}
                            sizes='100vw'
                            className="py-2 object-cover  cursor-pointer"
                        /> */}
                        <ProductImage product={itm} fill src={`${process.env.BASE_IMAGE_URL}${itm.productImages.find(x => x.isDefault === true)?.url}`} />
                        <ShopNowButton product={itm} />
                    </div>
                ))}

                {/* <div>
                    <div className="group relative flex items-center justify-center">
                        <Image
                            src="/h_2.jpg"
                            alt="test"
                            width={300}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                            className="w-full aspect-video py-2 object-fill hover:scale-105 duration-700 delay-200 cursor-pointer"
                        />
                        <button className="absolute border-none bg-sky-300 p-2  transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-sky-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                    </div>
                    <div className="group relative flex items-center justify-center">
                        <Image
                            src="/g_4.jpg"
                            alt="test"
                            width={300}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                            className="object-cover w-full aspect-square py-2  hover:scale-105 duration-700 delay-200 cursor-pointer"
                        />

                        <button className="absolute border-none bg-sky-300 p-2 transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-sky-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                    </div>
                </div>
                <div>
                    <div className="group relative flex items-center justify-center">
                        <Image
                            src="/ma_1.jpg"
                            alt="test"
                            width={300}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                            className="w-full aspect-square py-2 object-cover hover:scale-105 duration-700 delay-200 cursor-pointer"
                        />
                        <button className="absolute border-none bg-sky-300 p-2 transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-sky-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                    </div>
                    <div className="group relative flex items-center justify-center">
                        <Image
                            src="/m_4.jpg"
                            alt="test"
                            width={300}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                            className="w-full aspect-video py-2 object-fill hover:scale-105 duration-700 delay-200 cursor-pointer"
                        />
                        <button className="absolute border-none bg-sky-300 p-2 transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-sky-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                    </div>

                </div>
                <div>
                    <div className="group relative flex items-center justify-center">
                        <Image
                            src="/o_2.jpg"
                            alt="test"
                            width={300}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                            className="w-full aspect-video py-2 object-fill hover:scale-105 duration-500 delay-100 cursor-pointer"
                        />
                        <button className="absolute border-none bg-sky-300 p-2 transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-sky-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                    </div>
                    <div className="group relative flex items-center justify-center">
                        <Image
                            src="/m_3.jpg"
                            alt="test"
                            width={300}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                            className="w-full aspect-square py-2 object-fill hover:scale-105 duration-500 delay-100 cursor-pointer"
                        />
                        <button className="absolute border-none bg-sky-300 p-2 transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-sky-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default NewProduct