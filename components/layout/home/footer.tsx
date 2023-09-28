import Link from 'next/link';
import React from 'react';
import LogoLink from '../navbar/logo-link';
import { ICategory } from '@/util/constant';

async function getCategories() {
    let res = await fetch(`${process.env.BASE_URL}/Category`);
    return res.json();
}

const Footer = async () => {

    const categories: ICategory[] = await getCategories();

    return (
        <div className="border-t mt-2 top-[70px] md:top-[85px] lg:top-[90px] xl:top-[100px] relative">
            <div className='container flex flex-col gap-4 mt-2'>
                <div className='flex flex-col md:grid md:grid-cols-3 grid-flow-row lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 gap-5'>
                    <div className='flex flex-col gap-5'>
                        <LogoLink />
                        <Link href={`/site-map`}>Site map</Link>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Sản phẩm</h1>
                        <ul className='flex flex-col gap-3 pt-3'>
                            {categories.map((itm) => (
                                <li key={itm.id}>
                                    <Link href={`/search/${itm.urlCode}`}>{itm.displayName}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Chính sách</h1>
                        <ul className='flex flex-col gap-3 pt-3'>
                            <Link href={`/about-us`}>Thông tin</Link>
                            <Link href={`/term-of-service`}>Điều khoản dịch vụ</Link>
                            <Link href={`/refund`}>Chính sách hoàn tiền</Link>
                            <Link href={`/shipping-policy`}>Chính sách giao hàng</Link>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Địa chỉ</h1>
                        <ul className='flex flex-col gap-4 pt-3'>
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
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <span className='text-sm'>©2023 <Link href={`/`}>Nhà Sóc Store</Link>. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
