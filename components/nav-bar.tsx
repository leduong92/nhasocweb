import React from 'react';
import NavLink from './nav-link';

const NavBar = () => {
    return (
        <header className="border-b p-4">
            <nav>
                <div>
                    <NavLink href="/">Trang chủ</NavLink>
                    <NavLink href="/products">Sản phẩm</NavLink>
                    <NavLink href="/about-us">About Us</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
