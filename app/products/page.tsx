import React from 'react';

type ProductProps = {
    id: number;
    title: string;
    description: string;
    price: number;
};

async function getProducts() {
    let res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

const Page = async () => {
    const products: ProductProps[] = await getProducts();

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
};

export default Page;
