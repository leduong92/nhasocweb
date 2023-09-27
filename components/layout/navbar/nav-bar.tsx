import React from 'react';
import DarkModeToggle from '../DarkModeToggle';
import Sidebar from './side-bar';
import NavLink from '../../nav-link';
import CartModel from '../../orders/basket/basket-model';
import LogoLink from './logo-link';
import Search from './search';

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
        <header className="py-2 border-b fixed top-0 z-40  bg-background w-screen">
            <div className='container flex items-center justify-between'>

                <LogoLink />
                <div>
                    <Search />
                </div>
                <div className='hidden md:flex lg:flex xl:flex items-center gap-3'>
                    <DarkModeToggle />
                    {links.map((link) => (
                        <NavLink key={link.id} href={link.url} >
                            {link.title}
                        </NavLink>
                    ))}
                    <div className='flex items-center'>
                        <CartModel />
                    </div>
                </div>
                <div className='flex items-center gap-5 md:hidden lg:hidden xl:hidden'>
                    <CartModel />
                    <Sidebar />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
