import { IProduct } from '@/util/constant';
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
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    <p className='text-3xl'>{p.title}</p>
                    <p className='mt-2'>${p.price}</p>
                    <p className='mt-2'>{p.description}</p>
                </div>
            ))}
        </div>
    )
}

export default page