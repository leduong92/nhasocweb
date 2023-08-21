import Image from 'next/image'
import React from 'react'

type ImageProps = {
    url: string,
    base64: string,
    title: string,
}

const Slider = () => {
    const images: ImageProps[] = [
        { url: "/1.jpg", base64: "", title: "Granola" },
        { url: "/hanhnhan.jpg", base64: "", title: "Hanh Nhan" },

    ]
    return (
        <div className='w-full relative'>
            <div className='flex relative overflow-hidden w-full h-full transition-all ease-in-out'>
                {images.map((img, idx) => (
                    <div key={idx} className='duration-700 ease-in-out w-full relative'>
                        <Image

                            src={img.url}
                            title={img.title}
                            width={1448}
                            height={962}
                            alt={img.title}
                            style={{ width: '100%', height: 'auto' }}
                            sizes='100vw'
                            priority
                        />
                    </div>

                ))}
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>

                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
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