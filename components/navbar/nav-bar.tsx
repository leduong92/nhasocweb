import React from 'react';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import Sidebar from '../sidebar/side-bar';
import NavLink from '../nav-link';
import CartModel from '../basket/basket-model';
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
        <header className="py-2 border-b sticky bg-background w-full ">
            <div className='container flex items-center justify-between'>

                <LogoLink />

                <div className='hidden md:flex lg:flex xl:flex items-center gap-3'>
                    <DarkModeToggle />
                    {links.map((link) => (
                        <NavLink key={link.id} href={link.url} >
                            {link.title}
                        </NavLink>
                    ))}
                    <div>
                        <CartModel />
                    </div>
                </div>
                <div className='flex items-center gap-2 md:hidden lg:hidden xl:hidden'>
                    <CartModel />
                    <Sidebar />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
