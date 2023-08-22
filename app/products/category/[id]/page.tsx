import CategoryDropdownTrigger from '@/components/category-dropdown-menu/category-dropdown-trigger';
import ProductCard from '@/components/product-card/product-card';
import ProductImage from '@/components/product-image';
import { IProduct } from '@/util/constant';
import Link from 'next/link';
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

async function getProduct(id: string) {
    let res = await fetch(`https://fakestoreapi.com/products/category/${id}`);
    return res.json();
}


const page = async ({ params }: Props) => {

    const products: IProduct[] = await getProduct(params.id);

    return (
        <div className='flex flex-col'>

            <div className='flex items-center justify-between pb-2'>
                <div>
                    <span>{products.length} Results</span>
                </div>

                <div className='md:hidden'>
                    <CategoryDropdownTrigger />
                </div>

            </div>

            <ProductCard products={products} />

        </div>
    )
}

export default page