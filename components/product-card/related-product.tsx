import { IProduct } from '@/util/constant';
import Link from 'next/link';
import React from 'react'
import GridTileImage from '../grid/tile';

async function getFeatureds() {

    let res = await fetch(`${process.env.BASE_URL}/Product/featureds`);

    return res.json()
}

const RelatedProducts = async () => {

    const relatedProducts: IProduct[] = await getFeatureds();

    if (!relatedProducts.length) return null;
    return (
        <div className="py-4 px-8">
            <h2 className="mb-4 text-2xl font-bold">Sản phẩm liên quan</h2>
            <ul className="flex w-full gap-4 overflow-x-auto overflow-y-hidden pt-1">
                {relatedProducts.map((product) => (
                    <li
                        key={product.id}
                        className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                    >
                        <Link className="relative h-full w-full" href={`/product-detail/${product.id}`}>
                            <GridTileImage
                                alt={product.metaTitle}
                                label={{
                                    title: product.metaTitle,
                                    amount: product.price,
                                    currencyCode: ''
                                }}
                                src={`${process.env.BASE_IMAGE_URL}${product.productImages.find(x => x.isDefault == true)?.url}`}
                                fill
                                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RelatedProducts