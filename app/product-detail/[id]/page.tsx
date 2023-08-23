import ProductImageThumb from '@/components/product-detail/product-image-thumb';
import InteractiveQuantity from '@/components/product-detail/interactive-quantity';
import { IProduct } from '@/util/constant';
import React from 'react'
import AddCartButton from '@/components/product-detail/add-cart-button';
import AddWishlist from '@/components/product-detail/add-wishlist-button';
import AddToCompare from '@/components/product-detail/add-to-compare';
import BreadCrumb from '@/components/breadcrumb/bread-crumb';

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
        <>
            <BreadCrumb router={`Products`} name={`${product.price}`} id={`${product.id}`} />

            <div className='container py-3'>
                <div className='flex flex-col gap-4 md:grid grid-flow-row grid-cols-2'>

                    <ProductImageThumb />

                    <div>
                        <h1>{product.title}</h1>
                        <span className='text-[30px] font-bold'>${product.price}</span>
                        <p className='text-[15px] font-normal text-justify'>{product.description}</p>

                        <InteractiveQuantity />

                        <AddCartButton />

                        <div className='flex gap-5 py-3'>
                            <div className='flex items-center gap-3 text-[14px] cursor-pointer'>
                                <AddWishlist />Add To Wishlist
                            </div>
                            <div className='flex items-center gap-3 text-[14px] cursor-pointer'>
                                <AddToCompare /> Add To Compare
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-[14px] mt-7">
                            <span>Vendor: Polo</span>
                            <span>Product Type: T-Shirt</span>
                            <span>Tag: T-Shirt, Women, Top</span>
                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}

export default Page