import BreadCrumb from '@/components/layout/bread-crumb'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Nhà Sóc Store | Order",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    alternates: {
        canonical: 'https://nhasoc.com/order-fail',
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
            <BreadCrumb router={`order-success`} name='Đặt hàng' />
            <div className='container py-5'>
                <div className='flex flex-col items-center justify-center py-5 gap-5 shadow-xl p-5'>
                    <h1 className='text-2xl py-2'>Xin lỗi!</h1>
                    <span className='text-xl py-2'>Bạn đặt hàng chưa thảnh công</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-28 h-28">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>

                    <h1 className='text-justify text-xl py-2'>Xin vui lòng thử lại hoặc bần F5 để tải lại trang</h1>
                </div>
            </div>
        </div>

    )
}

export default Page