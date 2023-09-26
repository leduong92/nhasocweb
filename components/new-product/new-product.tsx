import { IProduct } from '@/util/constant'
import Image from 'next/image'
import React from 'react'
import ShopNowButton from './shop-now'
import ProductImage from '../product-image'
import Link from 'next/link'
import GridTileImage from '../grid/tile'

function ThreeItemGridItem({
    item,
    size,
    priority
}: {
    item: IProduct;
    size: 'full' | 'half';
    priority?: boolean;
}) {
    return (
        <div
            className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
        >
            <Link className="relative block aspect-square h-full w-full" href={`/product-detail/${item.id}`}>
                <GridTileImage
                    src={`${process.env.BASE_IMAGE_URL}${item.productImages.find(x => x.isDefault === true)?.url}`}
                    fill
                    sizes={
                        size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
                    }
                    priority={priority}
                    alt={item.metaTitle}
                    label={{
                        position: size === 'full' ? 'center' : 'bottom',
                        title: item.metaTitle as string,
                        amount: item.originalPrice,
                        currencyCode: 'VND'
                    }}
                />
            </Link>
        </div>
    );
}

const NewProduct = ({ products }: { products: IProduct[] }) => {

    return (
        // <div className="container">
        //     <h1 className='font-bold text-3xl py-3'>Sản phẩm mới</h1>

        //     <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">

        //         {/* {products.map((itm) => (
        //             <div key={itm.id} className="group relative flex items-center justify-center h-72 ">

        //                 <ProductImage product={itm} fill src={`${process.env.BASE_IMAGE_URL}${itm.productImages.find(x => x.isDefault === true)?.url}`} />
        //                 <ShopNowButton product={itm} />
        //             </div>
        //         ))} */}

        //     </div>
        // </div>
        <section className="mx-auto grid max-w-screen-2xl gap-5 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
            <ThreeItemGridItem size="full" item={products[0]} priority={true} />
            <ThreeItemGridItem size="half" item={products[1]} priority={true} />
            <ThreeItemGridItem size="half" item={products[2]} />

            <ThreeItemGridItem size="full" item={products[5]} priority={true} />
            <ThreeItemGridItem size="half" item={products[3]} priority={true} />
            <ThreeItemGridItem size="half" item={products[4]} priority={true} />

        </section>
    )
}

export default NewProduct