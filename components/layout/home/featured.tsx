
import React from 'react'
import Link from 'next/link';
import GridTileImage from '../../product/grid/tile';
import { dynamicBlurUrl } from '@/util';
import { IProduct } from '@/lib/model';

const Featured = async ({ products }: { products: IProduct[] }) => {

    return (
        <div className='py-3 overflow-hidden'>

            <div className='container'>
                <h1 className='font-bold text-3xl py-3'>Sản phẩm nổi bật</h1>
            </div>

            <div className='w-full overflow-x-auto pb-6 pt-1'>
                <ul className='flex  animate-carousel gap-4'>
                    {products.map((p, idx) => (
                        <li
                            key={p.id}
                            className="relative aspect-square h-[30vh] max-h-[275px] w-1/3 max-w-[275px] flex-none md:w-1/3"
                        >
                            <Link href={`/product/${p.id}`}>
                                <GridTileImage
                                    alt={p.metaTitle}
                                    label={{
                                        title: p.metaTitle,
                                        amount: p.originalPrice,
                                        currencyCode: 'vi-VN'
                                    }}
                                    src={`${process.env.BASE_IMAGE_URL}${p.productImages.find(x => x.isDefault === true)?.url}`}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                    placeholder='blur'
                                    blurDataURL={`${dynamicBlurUrl(`${process.env.BASE_IMAGE_URL}${p.productImages.find(x => x.isDefault === true)?.url}`)}`}
                                />
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )
}

export default Featured

