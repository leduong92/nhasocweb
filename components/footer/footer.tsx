import Link from 'next/link';
import React from 'react';
import LogoLink from '../logo-link/logo-link';

const Footer = () => {
    return (
        <div className="border-t mt-2">
            <div className='container flex flex-col gap-4 mt-2'>
                <div className='flex flex-col md:grid grid-flow-row grid-cols-3 gap-5'>
                    <div className='flex flex-col gap-5'>
                        <LogoLink />
                        <Link href={`/site-map`}>Site map</Link>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Sản phẩm</h1>
                        <ul className='flex flex-col gap-3 pt-3'>
                            <li>Granola</li>
                            <li>Macca</li>
                            <li>Hạt điều</li>
                            <li>Hạnh nhân</li>
                            <li>Mix</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Chính sách</h1>
                        <ul className='flex flex-col gap-3 pt-3'>
                            <Link href={`/about-us`}>About us</Link>
                            <li>Terms of service</li>
                            <li>Refund policy</li>
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
