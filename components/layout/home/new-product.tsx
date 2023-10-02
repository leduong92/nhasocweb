
import React from 'react'
import Link from 'next/link'
import GridTileImage from '../../product/grid/tile'
import { dynamicBlurUrl } from '@/util';
import { IProduct, IProductImage } from '@/lib/model';

async function ThreeItemGridItem({
    item,
    size,
    priority
}: {
    item: IProduct;
    size: 'full' | 'half';
    priority?: boolean;
}) {

    // const images = item.productImages.map(async (img) => ({
    //     ...img, blurHash: await dynamicBlurUrl(`${process.env.BASE_IMAGE_URL}${img.url}`)
    // }));

    // const photos: IProductImage[] = await Promise.all(images);

    // const blurUrl = photos.find(x => x.isDefault == true)?.blurHash;

    return (
        <div
            className={size === 'full' ? 'aspect-square py-2' : 'aspect-video py-2'}
        >
            <Link href={`/product/${item.id}`} className="relative block h-full w-full">
                <GridTileImage
                    src={`${process.env.BASE_IMAGE_URL}${item.productImages.find(x => x.isDefault === true)?.url}`}
                    fill
                    sizes={
                        size === 'full' ? '(min-width: 768px) 66vw, 100vw' : ' (min-width: 768px) 33vw, 100vw'
                    }
                    priority={priority}
                    alt={item.metaTitle}
                    label={{
                        position: size === 'full' ? 'center' : 'bottom',
                        title: item.metaTitle as string,
                        amount: item.originalPrice,
                        currencyCode: 'VND'
                    }}
                // placeholder='blur'
                // blurDataURL={blurUrl}
                />
            </Link>
        </div>
    );
}

const NewProduct = ({ products }: { products: IProduct[] }) => {
    return (
        // <section className="container mx-auto grid gap-5 px-4  pb-4 md:grid-cols-6 md:grid-rows-2">
        //     <ThreeItemGridItem size="full" item={products[0]} priority={true} />
        //     <ThreeItemGridItem size="half" item={products[1]} priority={true} />
        //     <ThreeItemGridItem size="half" item={products[2]} />

        //     <ThreeItemGridItem size="full" item={products[5]} priority={true} />
        //     <ThreeItemGridItem size="half" item={products[3]} priority={true} />
        //     <ThreeItemGridItem size="half" item={products[4]} priority={true} />

        // </section>
        <section className="container gap-8 columns-3">
            <ThreeItemGridItem size="full" item={products[0]} priority={true} />
            <ThreeItemGridItem size="half" item={products[1]} priority={true} />
            <ThreeItemGridItem size="half" item={products[2]} />

            <ThreeItemGridItem size="full" item={products[4]} priority={true} />
            <ThreeItemGridItem size="full" item={products[5]} priority={true} />
            <ThreeItemGridItem size="half" item={products[3]} priority={true} />

        </section>
    )
}

export default NewProduct