import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import NavLink from '@/components/nav-link';
import { ICategory } from '@/util/constant';
import React from 'react';


async function getCategories() {
    // let res = await fetch('https://fakestoreapi.com/products/categories');
    let res = await fetch('http://localhost:5000/api/Category');
    return res.json();
}
// export interface ICategory {
//     id: number,
//     categoryName: string,
//     url_code: string,
//     description: string
// }

const Layout = async ({ children }: { children: React.ReactNode }) => {

    // const categories: ICategory[] = [
    //     { id: 1, categoryName: "Hạt Macca", url_code: "electronics", description: "" },
    //     { id: 2, categoryName: "Hạnh nhân", url_code: "jewelery", description: "" },
    //     { id: 3, categoryName: "Mix hạt dinh dưỡng", url_code: "men's clothing", description: "" },
    //     { id: 4, categoryName: "Granola", url_code: "women's clothing", description: "" },
    //     { id: 5, categoryName: "Hạt óc chó", url_code: "jewelery", description: "" },
    //     { id: 6, categoryName: "Hạt điều", url_code: "electronics", description: "" },
    // ];

    const categories: ICategory[] = await getCategories();

    return (
        <>
            <BreadCrumb router={`products`} name='Products' />

            <div className='container py-2 md:flex gap-5 my-2'>
                <ul className='hidden text-sm md:flex flex-col flex-auto w-64'>
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
