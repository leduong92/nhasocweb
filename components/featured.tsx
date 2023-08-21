import { IProduct } from '@/util/constant';
import React from 'react'

async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");

    return res.json()
}

const Featured = async () => {

    const products: IProduct[] = await getProducts();

    return (
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    {p.title}
                </div>
            ))}
        </div>
    )
}

export default Featured