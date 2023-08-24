import Image from 'next/image'
import React from 'react'

const NewProduct = () => {
    return (
        <div className="container">
            <h1 className='font-bold text-xl py-3'>New products</h1>

            <div className="columns-3 gap-5">
                <div>
                    <div className="group relative flex items-center justify-center">
                        <Image
                            src="/h_2.jpg"
                            alt="test"
                            width={300}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                            className="w-full aspect-video py-2 rounded-xl object-fill hover:scale-105 duration-700 delay-200 cursor-pointer"
                        />
                        <button className="absolute border bg-sky-300 rounded-md p-2  transition transform 
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
                            className="object-cover w-full aspect-square py-2 rounded-xl hover:scale-105 duration-700 delay-200 cursor-pointer"
                        />

                        <button className="absolute border bg-sky-300 rounded-md p-2 transition transform 
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
                            className="w-full aspect-square py-2 rounded-xl object-cover hover:scale-105 duration-700 delay-200 cursor-pointer"
                        />
                        <button className="absolute border bg-sky-300 rounded-md p-2 transition transform 
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
                            className="w-full aspect-video py-2 rounded-xl object-fill hover:scale-105 duration-700 delay-200 cursor-pointer"
                        />
                        <button className="absolute border bg-sky-300 rounded-md p-2 transition transform 
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
                            className="w-full aspect-video py-2 rounded-xl object-fill hover:scale-105 duration-500 delay-100 cursor-pointer"
                        />
                        <button className="absolute border bg-sky-300 rounded-md p-2 transition transform 
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
                            className="w-full aspect-square py-2 rounded-xl object-fill hover:scale-105 duration-500 delay-100 cursor-pointer"
                        />
                        <button className="absolute border bg-sky-300 rounded-md p-2 transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-sky-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct