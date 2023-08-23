import React from 'react';
import Link from 'next/link';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import Sidebar from '../sidebar/side-bar';
import NavLink from '../nav-link';
import CartModel from '../cart/cart-model';
import Image from 'next/image';
import LogoLink from '../logo-link/logo-link';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Sản phẩm",
        url: "/products",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about-us",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact-us",
    },
];

const NavBar = () => {
    return (
        <header className="border-b py-2">
            <div className='container flex items-center justify-between'>

                <LogoLink />

                <div className='hidden md:flex items-center gap-3'>
                    <DarkModeToggle />
                    {links.map((link) => (
                        <NavLink key={link.id} href={link.url} >
                            {link.title}
                        </NavLink>
                    ))}
                    <div className='flex items-center gap-4'>
                        {/* <div className='text-[14px] cursor-pointer relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span className='flex items-center justify-center absolute top-[-12px] right-[-12px] w-5 h-5 rounded-full text-[12px] bg-blue-500 text-white'>1</span>
                        </div> */}
                        <CartModel />
                    </div>
                </div>
                <Sidebar />

            </div>
        </header>
    );
};

export default NavBar;
