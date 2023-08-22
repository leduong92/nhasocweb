import { IProduct } from '@/util/constant';
import Image from 'next/image';
import React from 'react'
import ProductImage from '../product-image';
import Link from 'next/link';
import ProductCard from '../product-card/product-card';

async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");

    return res.json()
}

const Featured = async () => {

    const products: IProduct[] = await getProducts();

    return (
        <div className='container py-3'>
            <h1>Featured Products</h1>

            <ProductCard products={products} />
        </div>
    )
}

export default Featured