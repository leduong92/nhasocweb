
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { useRouter } from 'next/navigation'

type SlideProps = {
    imgUrl: string,
    base64: string,
    title: string,
    url: string,
    description: string,
}

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();

    const images: SlideProps[] = [
        { imgUrl: "/ma_2.jpg", base64: "", title: "Hạt Macca", url: '/products/category/9084363c-2404-45c5-a611-673ba2846a6c', description: "Hạt Macca là hạt giống của cây macadamia, có nguồn gốc từ Úc và được trồng ở nhiều nơi trên thế giới, chằng hạn như Brazil, Costa Rica, Hawaii, New Zealand, trong đó có Việt Nam..." },
        { imgUrl: "/m_1.jpg", base64: "", title: "Granola", url: '/products/category/3b8472f6-2d18-4770-a449-d2f3a4ad09ef', description: "Granola là món ăn quen thuộc của người Mỹ vào buổi sáng, đây là hỗn hợp của nhiều thực phẩm lành lạnh với hàm lượng chất dinh dưỡng cao, nhất là giàu protein." },
        { imgUrl: "/h_4.jpg", base64: "", title: "Hạnh Nhân", url: '/products/category/76de0415-456b-44fa-9945-db3d3b7f1b87', description: "Hạnh nhân là một trong những loại hạt phổ biến trên thế giới. Thành phần dinh dưỡng của hạnh nhân giàu chất béo lành mạnh, chất chống oxy hóa, vitamin và khoáng chất." },
        { imgUrl: "/o_1.jpg", base64: "", title: "Quả Óc Chó", url: '/products/category/71f8cfd2-f0ab-49ae-9059-b0df1109c016', description: "Quả óc chó có nguồn gốc ở khu vực Địa Trung Hải và Trung Á. Óc chó giàu chất béo omega-3 và chứa lượng chất chống oxy hóa cao hơn hầu hết các loại thực phẩm khác." },
        { imgUrl: "/h_1.jpg", base64: "", title: "Mix Hạt Dinh Dưỡng", url: '/products/category/22b875fb-62de-4b86-acdd-52ee130b1bb8', description: "Mixed nuts là trộn hỗn hợp các loại hạt dinh dưỡng với nhau tạo thành 1 sản phẩm đa dạng hạt, việc mix các loại hạt dinh dưỡng giúp bạn đa dạng được các loại hạt bổ sung trong thực đơn hàng ngày." },
    ]
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className='w-full relative overflow-hidden md:h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] xl:h-[calc(100vh-80px)] z-10'>
            <div className='flex overflow-hidden w-[500vw] h-full transition-all ease-in-out'>
                {images.map((img, idx) => (
                    <div key={idx} className='flex duration-700 ease-in-out w-full overflow-hidden relative cursor-pointer' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                        <Image
                            src={img.imgUrl}
                            title={img.title}
                            width={1448}
                            height={962}
                            alt={img.title}
                            style={{ width: '100%', height: 'auto' }}
                            sizes='100vw'
                            priority
                            className='object-cover w-screen h-full relative'
                            onClick={() => router.push(`${img.url}`)}
                        />

                        <div className='absolute bottom-0 h-96 w-full bg-gradient-to-t from-gray-500/70  z-0'></div>

                        <div className='flex flex-col absolute bottom-6 left-8 gap-10 md:w-[600px] md:bottom-5 md:left-20 lg:left-14 lg:bottom-18 lg:w-[700px] lg:bottom-36 xl:left-40 xl:w-full '>
                            <h1 className='font-bold text-4xl text-white md:text-5xl lg:text-8xl animate-fadeTopToBottom repeat-1 xl:text-8xl'>{img.title}</h1>
                            <Label className='hidden text-white font-extralight w-72 text-sm  line-clamp-1 md:hidden lg:flex xl:flex text-justify leading-normal animate-fadeLeftToRight 
                            repeat-1 md:text-2xl md:w-full lg:w-[800px] lg:text-4xl xl:w-[1200px] xl:text-4xl'>{img.description}</Label>
                            <Button className='w-[200px] h-8 xl:h-10 rounded border-none bg-sky-400/70 hover:bg-sky-500 active:ring-1 md:h-12 transition-all duration-700 ease-in-out animate-buttonScale text-yellow-50'
                                onClick={() => router.push(`${img.url}`)}
                            >SHOP NOW</Button>
                        </div>


                    </div>

                ))}

            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide} >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>

                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>

                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default Slider