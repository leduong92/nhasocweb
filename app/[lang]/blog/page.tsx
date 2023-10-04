import ReadMoreButton from '@/components/blog/read-more-button'
import BreadCrumb from '@/components/layout/bread-crumb'
import { BlogsData } from '@/lib'
import { Metadata } from 'next'
import Image from 'next/image.js'
import React from 'react'

export const metadata: Metadata = {
    title: "Nhà Sóc Store | Blog",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    alternates: {
        canonical: 'https://nhasoc.com/blog',
        languages: {
            'vi': '/vi'
        }
    },
    applicationName: 'Nhà Sóc Store',
    authors: [{ name: 'jame' }, { name: 'johson', url: 'https://nhasoc.com' }],
    keywords: ['Nhà Sóc, Mác Ca, Macca, Hạt điều, Granola, Hạnh nhân, dinh dưỡng'],
    colorScheme: 'light',
    creator: 'jamejohson',

    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-icon.ico'
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
};

const Page = () => {
    return (
        <div>
            <BreadCrumb router={`blog`} name='Blogs' />

            <div className='container'>
                <h1 className='capitalize font-bold text-[25px] py-4'>Our Blog </h1>

                {BlogsData.map((item) => (
                    <div key={item.id} className='flex flex-col my-3 py-2 gap-5 md:flex-row md:odd:flex-row-reverse xl:items-center'>
                        <div className='order-2 md:order-1 pr-1 xl:flex-1 flex-col items-center text-left' >
                            <h1 className='font-bold text-5xl my-5'>{item.title}</h1>
                            <p className='text-justify my-3 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left'>
                                {item.desc}
                            </p>
                            <ReadMoreButton id={item.id} />
                        </div>
                        <div className='order-1 md:order-2 xl:flex-1'>
                            <Image
                                width={500}
                                height={500}
                                src={item.imageUrl}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page