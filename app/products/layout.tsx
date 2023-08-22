import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import NavLink from '@/components/nav-link';
import React from 'react';


async function getCategories() {
    let res = await fetch('https://fakestoreapi.com/products/categories');
    return res.json();
}

const Layout = async ({ children }: { children: React.ReactNode }) => {

    const categories: string[] = await getCategories();

    return (
        <>
            <div>
                <BreadCrumb />
            </div>
            <div className='container flex py-2'>
                <ul className='pr-1 text-sm'>
                    {categories.map((c, idx) => (
                        <li key={idx}>
                            <NavLink href={`/products/category/${c}`}>{c}</NavLink>
                        </li>
                    ))}
                </ul>

                <div>{children}</div>
            </div>
        </>
    );
};

export default Layout;
