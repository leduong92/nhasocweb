import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import NavLink from '@/components/nav-link';
import { ICategory } from '@/util/constant';
import React from 'react';


async function getCategories() {
    let res = await fetch('http://localhost:5000/api/Category');
    return res.json();
}

const Layout = async ({ children }: { children: React.ReactNode }) => {

    const categories: ICategory[] = await getCategories();

    return (
        <>
            <BreadCrumb router={`products`} name='Products' />

            <div className='container py-2 md:flex lg:flex xl:flex gap-5 my-2'>
                <ul className='hidden text-sm md:flex lg:flex xl:flex flex-col flex-auto w-64'>
                    <h1 className='font-bold text-[19px] pt-1'>Các sản phẩm</h1>
                    <div className='flex flex-col gap-2 py-3'>
                        {categories.map((c, idx) => (
                            <li key={idx}>
                                <NavLink href={`/products/category/${c.id}`}>{c.displayName}</NavLink>
                            </li>
                        ))}
                    </div>
                </ul>

                <div className='flex-auto w-full'>{children}</div>
            </div>
        </>
    );
};

export default Layout;
