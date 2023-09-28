import BreadCrumb from '@/components/layout/bread-crumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: "Nhà Sóc Store | Contact Us",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    alternates: {
        canonical: 'https://nhasoc.com/contact-us',
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
            <BreadCrumb router={`contact-us`} name='Liên hệ' />

            <div className='container'>
                <div className='py-5'>
                    <h1 className='font-bold text-[30px]'>Liên hệ với chúng tôi</h1>
                    <div className='w-full h-[1px] flex justify-center items-center py-2 md:justify-start lg:justify-start xl:justify-start'>
                        <span className='border-t-2 w-40 md:w-60 md:ml-7 lg:ml-2 xl:ml-2 lg:w-72 xl:w-72'></span>
                    </div>
                    <div className='xl:grid xl:grid-cols-2 gap-5 '>
                        <ul className='flex flex-col gap-4 pt-3 border shadow-md p-5 my-5 xl:order-2 '>
                            <li className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                <Link href={`https://www.google.com/maps/place/H%E1%BA%BBm+124,+Tr%E1%BA%A3ng+D%C3%A0i,+Tp.+Bi%C3%AAn+H%C3%B2a,+%C4%90%E1%BB%93ng+Nai/@10.9764862,106.8558318,17z/data=!4m6!3m5!1s0x3174dc49d51f0ba5:0xb0e55648baaeb08a!8m2!3d10.9764599!4d106.8563039!16s%2Fg%2F11c3yms7vp?entry=ttu`}
                                    target='_blank'>
                                    <p className='text-justify'>Hẻm 124, Phường Trảng Dài, Thành phố Biên Hoà, Tỉnh Đồng Nai.</p>
                                </Link>
                            </li>
                            <li className='flex gap-3 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <p className='text-justify'>0393.850.836</p>
                            </li>
                            <li className='flex gap-3 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <p className='text-justify'>jamejohson92@gmail.com</p>
                            </li>

                        </ul>

                        <div className='border shadow-md p-5 gap-5 my-5 xl:order-1 '>
                            <div className='flex flex-col gap-5 py-2'>
                                <Input type="email" placeholder="Email" />
                                <Input type="name" placeholder="Họ tên" />
                                <Input type="phone" placeholder="Số điện thoại" />
                                <Textarea placeholder="Góp ý" />
                            </div>
                            <div className='py-2'>
                                <Button className='w-full'>Gửi</Button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Page