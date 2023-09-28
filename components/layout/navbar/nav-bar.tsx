import React from 'react';
import DarkModeToggle from '../DarkModeToggle';
import Sidebar from './side-bar';
import NavLink from '../../nav-link';
import CartModel from '../../orders/basket/basket-model';
import LogoLink from './logo-link';
import Search from './search';
import MobileMenu from './mobile-menu';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Sản phẩm",
        url: "/search",
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
        <nav className="py-2 border-b fixed top-0 z-40  bg-background w-screen">
            <div className="block flex-none md:hidden">
                <MobileMenu links={links} />
            </div>

            <div className='hidden container md:flex items-center justify-between'>

                <LogoLink />
                <div>
                    <Search />
                </div>
                <div className='flex items-center gap-3'>
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

            </div>
        </nav>
    );
};

export default NavBar;
