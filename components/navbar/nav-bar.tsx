import React from 'react';
import NavLink from './nav-link';
import Link from 'next/link';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import Sidebar from '../sidebar/side-bar';

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
        <header className="border-b py-4">
            <div className='container flex justify-between'>
                <Link href="/" className='font-bold text-lg' >Nhà Sóc Store</Link>
                <div className='hidden md:flex items-center gap-3'>
                    <DarkModeToggle />
                    {links.map((link) => (
                        <NavLink key={link.id} href={link.url} >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
                <Sidebar />

            </div>
        </header>
    );
};

export default NavBar;
