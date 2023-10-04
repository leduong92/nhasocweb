import React, { Suspense } from 'react';
import DarkModeToggle from '../DarkModeToggle';
import NavLink from '../../nav-link';
import CartModel from '../../orders/basket/basket-model';
import LogoLink from './logo-link';
import Search from './search';
import MobileMenu from './mobile-menu';
import { Navlinks } from '@/lib';
import { Locale } from '@/i18n.config';
import LocaleSwitcher from '@/components/locale-switcher';
import { getDictionary } from '@/lib/dictionary';

const NavBar = async ({ lang }: { lang: Locale }) => {

    const links = Navlinks;
    const { navigation } = await getDictionary(lang)

    return (
        <nav className="py-2 border-b fixed top-0 z-40  bg-background w-screen">
            <div className="block flex-none md:hidden">
                <MobileMenu links={links} lang={lang} />
            </div>

            <div className='hidden container md:flex items-center justify-between'>

                <LogoLink lang={lang} />

                <Suspense>
                    <div>
                        <Search />
                    </div>
                </Suspense>

                <div className='flex items-center gap-3'>
                    <DarkModeToggle />
                    {links.map((link, idx) => (
                        <NavLink key={link.id} href={`/${lang}/${link.url}`} >
                            {(navigation as any)[link.trans]}
                        </NavLink>
                    ))}
                    <div className='flex items-center'>
                        <CartModel />
                    </div>
                </div>
                <LocaleSwitcher />

            </div>
        </nav>
    );
};

export default NavBar;
