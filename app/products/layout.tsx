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
        <div className='container'>
            <div>
                <BreadCrumb />
            </div>
            <div className='py-2 md:flex gap-5'>
                <ul className='hidden pr-1 text-sm md:block'>
                    <h1 className='font-bold text-[19px] pb-2'>Categories</h1>
                    {categories.map((c, idx) => (
                        <li key={idx}>
                            <NavLink href={`/products/category/${c}`}>{c}</NavLink>
                        </li>
                    ))}
                </ul>

                <div className='w-full'>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
