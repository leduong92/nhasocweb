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

                <div className='hidden md:flex lg:flex xl:flex items-center gap-3'>
                    <DarkModeToggle />
                    {links.map((link) => (
                        <NavLink key={link.id} href={link.url} >
                            {link.title}
                        </NavLink>
                    ))}
                    <div className='flex items-center gap-4'>
                        <CartModel />
                    </div>
                </div>
                <Sidebar />

            </div>
        </header>
    );
};

export default NavBar;
