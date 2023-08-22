import ProductCard from '@/components/product-card/product-card';
import { IProduct } from '@/util/constant';
import React from 'react'

async function getProducts() {
    let res = await fetch('https://fakestoreapi.com/products/');
    return res.json();
}

const Page = async () => {

    const products: IProduct[] = await getProducts();

    return (
        <ProductCard products={products} />
    )
}

export default Page