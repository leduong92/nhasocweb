
import Link from 'next/link';
import Grid from '.';
import GridTileImage from './tile';
import { IProduct } from '@/lib/model';

export default function ProductGridItems({ products }: { products: IProduct[] }) {
    return (
        <>
            {products.map((product) => (
                <Grid.Item key={product.id} className="animate-fadeIn">
                    <Link href={`/product/${product.id}`} className="relative inline-block h-full w-full" >
                        <GridTileImage
                            alt={product.displayName}
                            label={{
                                title: product.displayName,
                                amount: product.price,
                            }}
                            src={`${process.env.BASE_IMAGE_URL}${product.productImages[0]?.url}`}
                            fill
                            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                    </Link>
                </Grid.Item>
            ))}
        </>
    );
}
