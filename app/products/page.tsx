import CategoryDropdownTrigger from '@/components/category-dropdown-menu/category-dropdown-trigger';
import ProductCard from '@/components/product-card/product-card';
import { SortCategoryMenu } from '@/components/sort-category-menu/sort-category-menu';
import { IProduct } from '@/util/constant';
import React from 'react'

async function getProducts() {
    let res = await fetch('https://fakestoreapi.com/products/');
    return res.json();
}

const Page = async () => {

    const products: IProduct[] = await getProducts();

    return (
        <>
            <div className='flex items-center justify-between '>
                <div>
                    <span>{products.length} Results</span>
                </div>

                <div >
                    <SortCategoryMenu />
                </div>

                <div className='md:hidden'>
                    <CategoryDropdownTrigger />
                </div>

            </div>
            <ProductCard products={products} />
        </>
    )
}

export default Page