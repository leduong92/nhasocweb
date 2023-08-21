import ProductImageThumb from '@/components/product-detail/product-image-thumb';
import InteractiveQuantity from '@/components/product-detail/interactive-quantity';
import { IProduct } from '@/util/constant';
import React from 'react'
import AddCartButton from '@/components/product-detail/add-cart-button';

type Props = {
    params: {
        id: string
    }
}

async function getProduct(id: string) {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);

    return res.json()
}

const Page = async ({ params: { id } }: Props) => {

    const product: IProduct = await getProduct(id);

    return (
        <div className='container py-3'>
            <div className='flex flex-col gap-4'>

                <ProductImageThumb />

                <div>
                    <h1>{product.title}</h1>
                    <span className='text-[30px] font-bold'>${product.price}</span>
                    <p className='text-[15px] font-normal text-justify'>{product.description}</p>
                    <InteractiveQuantity />
                    <AddCartButton />
                </div>
            </div>

            <div>
                Related
            </div>
        </div>
    )
}

export default Page