import { IProduct, IProductImage } from '@/util/constant'
import React from 'react'
import Link from 'next/link'
import GridTileImage from '../../product/grid/tile'
import { dynamicBlurUrl } from '@/util/dynamicBlurUrl';

async function ThreeItemGridItem({
    item,
    size,
    priority
}: {
    item: IProduct;
    size: 'full' | 'half';
    priority?: boolean;
}) {

    const images = item.productImages.map(async (img) => ({
        ...img, blurHash: await dynamicBlurUrl(`${process.env.BASE_IMAGE_URL}${img.url}`)
    }));

    const photos: IProductImage[] = await Promise.all(images);

    const blurUrl = photos.find(x => x.isDefault == true)?.blurHash;

    return (
        <div
            className={size === 'full' ? 'container md:col-span-4 md:row-span-2' : 'container md:col-span-2 md:row-span-1'}
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
                    placeholder='blur'
                    blurDataURL={blurUrl}
                />
            </Link>
        </div>
    );
}

const NewProduct = ({ products }: { products: IProduct[] }) => {
    return (
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