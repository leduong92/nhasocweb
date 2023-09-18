import BreadCrumb from '@/components/breadcrumb/bread-crumb'
import OrderPage from '@/components/order-page/order'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "Nhà Sóc Store | Order",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    alternates: {
        canonical: 'https://nhasoc.com/order',
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
const Order = () => {

    return (
        <div>
            <BreadCrumb router={`order`} name='Giỏ hàng' />
            <div className='container py-5'>
                <div className='flex justify-center pb-2'>
                    <h1 className='text-[40px] font-bold '>Đơn hàng của bạn</h1>
                </div>
                <div className='flex flex-col md:grid md:grid-cols-2 gap-10 xl:grid grid-cols-2  p-5'>
                    <OrderPage />
                </div>
            </div>
        </div>
    )
}

export default Order