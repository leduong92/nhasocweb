import React from "react";
import NavLink from "./nav-link";

const NavBar = () => {
  return (
    <header className="border-b p-4">
      <nav className="space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
