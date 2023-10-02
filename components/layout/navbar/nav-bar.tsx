import React, { Suspense } from 'react';
import DarkModeToggle from '../DarkModeToggle';
import Sidebar from './side-bar';
import NavLink from '../../nav-link';
import CartModel from '../../orders/basket/basket-model';
import LogoLink from './logo-link';
import Search from './search';
import MobileMenu from './mobile-menu';
import { Navlinks } from '@/lib';

const NavBar = () => {

    const links = Navlinks;

    return (
        <nav className="py-2 border-b fixed top-0 z-40  bg-background w-screen">
            <div className="block flex-none md:hidden">
                <MobileMenu links={links} />
            </div>

            <div className='hidden container md:flex items-center justify-between'>

                <LogoLink />
                <Suspense>
                    <div>
                        <Search />
                    </div>
                </Suspense>
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
