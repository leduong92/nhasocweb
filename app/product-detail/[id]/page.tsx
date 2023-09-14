import ProductImageThumb from '@/components/product-detail/product-image-thumb';
import InteractiveQuantity from '@/components/product-detail/interactive-quantity';
import { IProduct } from '@/util/constant';
import React from 'react'
import AddCartButton from '@/components/product-detail/add-cart-button';
import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import { Metadata, ResolvingMetadata } from 'next';
import { formatCurrency } from '@/util/formatCurrency';
import AddToCartButton from '@/components/product-card/add-cart-button';
type Props = {
    params: {
        id: string
    }
}

async function getProduct(id: string) {
    let res = await fetch(`${process.env.BASE_URL}/Product/${id}`);

    return res.json()
}


export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = params.id;

    let product: IProduct = await fetch(`${process.env.BASE_URL}/Product/${id}`).then(res => res.json());
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        metadataBase: new URL('https://nhasoc.com'),
        alternates: {
            canonical: '/',
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


const Page = async ({ params: { id } }: Props) => {

    const product: IProduct = await getProduct(id);

    return (
        <>
            <BreadCrumb router={`Products`} name={`${product.displayName}`} id={`${product.id}`} />

            <div className='container py-3'>
                <div className='flex flex-col gap-4 md:grid lg:grid xl:grid grid-flow-row grid-cols-2'>

                    <div >
                        <ProductImageThumb product={product} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-[30px]'>{product.displayName}</h1>
                        <div className='flex gap-3 justify-between'>
                            <span className='text-2xl'>{formatCurrency(product.price)}</span>
                            <span className='text-md font-light italic line-through'>{formatCurrency(product.originalPrice)}</span>
                        </div>
                        <p className='text-[15px] font-normal text-justify'>{product.description}</p>

                        <InteractiveQuantity product={product} />

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