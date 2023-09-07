import CategoryDropdownTrigger from '@/components/category-dropdown-menu/category-dropdown-trigger';
import ProductCard from '@/components/product-card/product-card';
import { SortCategoryMenu } from '@/components/sort-category-menu/sort-category-menu';
import { IProduct, IProductPaging } from '@/util/constant';
import React from 'react'

async function getProducts() {
    let res = await fetch('http://localhost:5000/api/Product/');
    return res.json();
}

const Page = async () => {

    const data: IProductPaging = await getProducts();

    return (
        <>
            <div className='flex items-center justify-between '>
                <div>
                    <span>{data.totalCount} Results</span>
                </div>

                {/* <div >
                    <SortCategoryMenu />
                </div> */}

                <div className='md:hidden lg:hidden xl:hidden'>
                    <CategoryDropdownTrigger />
                </div>

            </div>
            <ProductCard products={data.results} />
        </>
    )
}

export default Page