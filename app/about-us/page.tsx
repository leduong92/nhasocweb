import BreadCrumb from '@/components/layout/bread-crumb';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Nhà Sóc Store | About Us",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    alternates: {
        canonical: 'https://nhasoc.com/about-us',
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
            <BreadCrumb router={`about-us`} name='Về chúng tôi' />

            <div className='container'>
                <div className='flex flex-col p-5' >
                    <div className='flex justify-center items-center'>
                        <h1 className='text-3xl font-bold'>Về chúng tôi</h1>
                    </div>
                </div>

                <div className='flex flex-col p-5 gap-3'>
                    <div>
                        <span className='font-bold'>Tài khoản: </span>
                        <span className='uppercase '>Nguyễn Thị Hải Yến</span>
                    </div>
                    <div>
                        <span className='font-bold'>Ngân hàng: </span>
                        <span>Viettinbank</span>
                    </div>
                    <div>
                        <span className='font-bold'>Chi nhánh: </span>
                        <span>Đồng Nai</span>
                    </div>
                    <div>
                        <span className='font-bold'>Lưu ý: </span>
                        <span className='text-justify'>Chúng tôi sẽ không chịu trách nhiệm về sai sót trong quá trình chuyển khoản hoặc chuyển khoản sai thông tin. Quý khách phải làm việc trực tiếp với ngân hàng để giải quyết sai sót trên.</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;
