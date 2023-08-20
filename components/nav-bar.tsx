import React from 'react';
import NavLink from './nav-link';

const NavBar = () => {
    return (
        <header className="border-b p-4">
            <nav className="flex justify-between space-x-4">
                <div>
                    <NavLink href="/">Nha Soc Store</NavLink>
                </div>

                <div className="flex gap-2">
                    <NavLink href="/">Trang chủ</NavLink>
                    <NavLink href="/products">Sản phẩm</NavLink>
                    <NavLink href="/about-us">About Us</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
