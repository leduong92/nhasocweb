import React from "react";
import Slider from "../slider/slider";
import Featured from "../featured/featured";
import Image from "next/image";

const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <Slider />

            <Featured />

            <div className="container">
                <h1>New products</h1>

                <div className="columns-3 gap-5">
                    <div>
                        <div className="group relative flex items-center justify-center">
                            <Image
                                src="/1.jpg"
                                alt="test"
                                width={300}
                                height={150}
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full aspect-video py-2 rounded-xl object-fill hover:scale-105 duration-700 delay-200 cursor-pointer"
                            />
                            <button className="absolute border bg-blue-300 rounded-md p-2 text-white transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-blue-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                        </div>
                        <div className="group relative flex items-center justify-center">
                            <Image
                                src="/2.jpg"
                                alt="test"
                                width={300}
                                height={150}
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full aspect-square py-2 rounded-xl object-fill hover:scale-105 duration-700 delay-200 cursor-pointer"
                            />

                            <button className="absolute border bg-blue-300 rounded-md p-2 text-white transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-blue-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                        </div>
                    </div>
                    <div>
                        <div className="group relative flex items-center justify-center">
                            <Image
                                src="/3.jpg"
                                alt="test"
                                width={300}
                                height={150}
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full aspect-square py-2 rounded-xl object-fill hover:scale-105 duration-700 delay-200 cursor-pointer"
                            />
                            <button className="absolute border bg-blue-300 rounded-md p-2 text-white transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-blue-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                        </div>
                        <div className="group relative flex items-center justify-center">
                            <Image
                                src="/11.jpg"
                                alt="test"
                                width={300}
                                height={150}
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full aspect-video py-2 rounded-xl object-fill hover:scale-105 duration-700 delay-200 cursor-pointer"
                            />
                            <button className="absolute border bg-blue-300 rounded-md p-2 text-white transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-blue-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                        </div>

                    </div>
                    <div>
                        <div className="group relative flex items-center justify-center">
                            <Image
                                src="/22.jpg"
                                alt="test"
                                width={300}
                                height={150}
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full aspect-video py-2 rounded-xl object-fill hover:scale-105 duration-500 delay-100 cursor-pointer"
                            />
                            <button className="absolute border bg-blue-300 rounded-md p-2 text-white transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-blue-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                        </div>
                        <div className="group relative flex items-center justify-center">
                            <Image
                                src="/33.jpg"
                                alt="test"
                                width={300}
                                height={150}
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full aspect-square py-2 rounded-xl object-fill hover:scale-105 duration-500 delay-100 cursor-pointer"
                            />
                            <button className="absolute border bg-blue-300 rounded-md p-2 text-white transition transform 
                                    -translate-x-40 duration-300 delay-100 ease-in-out invisible group-hover:visible group-hover:scale-100 hover:bg-blue-400 active:ring-2
                                    group-hover:translate-x-0
                                    ">Shop now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default HomePage;
