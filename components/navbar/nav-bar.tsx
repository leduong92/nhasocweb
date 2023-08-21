import React from 'react';
import NavLink from './nav-link';
import Link from 'next/link';
import DarkModeToggle from '../darkmode/DarkModeToggle';

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
        <header className="border-b p-4">
            <div className='flex justify-between'>
                <Link href="/" className='font-bold text-lg' >Nhà Sóc Store</Link>
                <div className='hidden md:flex items-center gap-3'>
                    <DarkModeToggle />
                    {links.map((link) => (
                        <NavLink key={link.id} href={link.url} >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
                <div className='block md:hidden lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
