import ProductImageThumb from '@/components/product-detail/product-image-thumb';
import InteractiveQuantity from '@/components/product-detail/interactive-quantity';
import { IProduct } from '@/util/constant';
import React from 'react'
import AddCartButton from '@/components/product-detail/add-cart-button';
import AddWishlist from '@/components/product-detail/add-wishlist-button';
import AddToCompare from '@/components/product-detail/add-to-compare';
import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import ProductCard from '@/components/product-card/product-card';

type Props = {
    params: {
        id: string
    }
}

async function getProduct(id: string) {
    let res = await fetch(`http://localhost:5000/api/Product/${id}`);

    return res.json()
}

const Page = async ({ params: { id } }: Props) => {

    const product: IProduct = await getProduct(id);

    return (
        <>
            <BreadCrumb router={`Products`} name={`${product.metaTitle}`} id={`${product.id}`} />

            <div className='container py-3'>
                <div className='flex flex-col gap-4 md:grid lg:grid xl:grid grid-flow-row grid-cols-2'>

                    <div >
                        <ProductImageThumb product={product} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-lg text-[30px]'>{product.metaTitle}</h1>
                        <div className='flex gap-3 justify-between'>
                            <span className='text-xl'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
                            <span className='text-md font-light italic line-through'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice)}</span>
                        </div>
                        <p className='text-[15px] font-normal text-justify'>{product.description}</p>

                        <InteractiveQuantity />

                        <AddCartButton />

                        <div className="flex flex-col gap-3 text-[14px] mt-7">
                            <span>Vendor: Polo</span>
                            <span>Product Type: T-Shirt</span>
                            <span>Tag: T-Shirt, Women, Top</span>
                        </div>

                    </div>
                </div>

            </div>

            <div>
                {/* <ProductCard products={} /> */}
            </div>
        </>

    )
}

export default Page