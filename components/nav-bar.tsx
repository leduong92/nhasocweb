import React from 'react';
import NavLink from './nav-link';
import Link from 'next/link';

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
            <nav className='flex justify-between'>
                <Link href="/" className='font-bold text-lg' >Nhà Sóc Store</Link>
                <div className='flex items-center gap-3'>
                    {/* <NavLink href="/">Trang chủ</NavLink>
                    <NavLink href="/products">Sản phẩm</NavLink>
                    <NavLink href="/blog">Blog</NavLink>
                    <NavLink href="/about-us">About Us</NavLink>
                    <NavLink href="/contact-us">Contact Us</NavLink> */}
                    {links.map((link) => (
                        <NavLink key={link.id} href={link.url} >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
