import ProductImageThumb from '@/components/product-detail/product-image-thumb';
import InteractiveQuantity from '@/components/product-detail/interactive-quantity';
import { IProduct } from '@/util/constant';
import React, { Suspense } from 'react'
import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import { Metadata, ResolvingMetadata } from 'next';
import { formatCurrency } from '@/util/formatCurrency';
import Price from '@/components/price';
import RelatedProducts from '@/components/product-card/related-product';
type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = params.id;

    let product: IProduct = await fetch(`${process.env.BASE_URL}/Product/${id}`).then(res => res.json());
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        metadataBase: new URL('https://nhasoc.com'),
        alternates: {
            canonical: `https://nhasoc.com/product-detail/${id}`,
            languages: {
                'vi': '/vi'
            }
        },
        title: 'Nhà Sóc Store | ' + product.metaTitle,
        description: product.metaDescription,
        applicationName: 'Nhà Sóc Store',
        authors: [{ name: 'jame' }, { name: 'johson', url: 'https://nhasoc.com' }],
        keywords: product.metaKeyword,
        colorScheme: 'light',
        creator: 'jamejohson',
        openGraph: {
            title: 'Nhà Sóc Store | ' + product.metaTitle,
            description: product.metaDescription,
            url: 'https://nhasoc.com',
            siteName: 'Nhà Sóc Store | Official Website',
            images: [`${product.productImages.find(x => x.isDefault === true)?.url}`, ...previousImages],
            type: 'website',

        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            }
        },
        icons: {
            icon: '/favicon.ico',
            apple: '/apple-icon.ico'
        },
        viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
        },
    }
}

async function getProduct(id: string) {
    let res = await fetch(`${process.env.BASE_URL}/Product/${id}`);

    return res.json()
}

const Page = async ({ params: { id } }: Props) => {

    const product: IProduct = await getProduct(id);

    return (
        <>
            <BreadCrumb router={`Products`} name={`${product.displayName}`} id={`${product.id}`} />

            <div className='container mx-auto max-w-screen-2xl py-4'>
                <div className='flex flex-col p-8 md:p-12 lg:flex-row lg:gap-8'>

                    <div className="h-full w-full basis-full lg:basis-4/6">
                        <ProductImageThumb product={product} />
                    </div>

                    <div className="basis-full lg:basis-2/6">
                        <h1 className='mb-2 text-5xl font-medium'>{product.displayName}</h1>
                        <div className='flex gap-3 justify-between py-4'>
                            <div className="mr-auto w-auto rounded-full bg-sky-500 p-2 text-sm text-white">
                                <Price
                                    amount={product.price}
                                />
                            </div>
                            <span className='text-md font-light italic line-through'>{formatCurrency(product.originalPrice)}</span>
                        </div>
                        <p className='text-[15px] font-normal text-justify py-2'>{product.description}</p>

                        <InteractiveQuantity product={product} />

                    </div>
                </div>

            </div>

            <div>
                <Suspense>
                    <RelatedProducts />
                </Suspense>
            </div>
        </>

    )
}

export default Page
