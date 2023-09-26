
import CategoryDropdownMenu from '@/components/category-dropdown-menu/category-dropdown-menu';
import ProductCard from '@/components/product-card/product-card';
import { IProduct } from '@/util/constant';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

async function getProduct(id: string) {
    let res = await fetch(`${process.env.BASE_URL}/Product/category/${id}`);
    return res.json();
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {

    const id = params.id;

    let product: IProduct[] = await fetch(`${process.env.BASE_URL}/Product/category/${id}`).then(res => res.json());
    // optionally access and extend (rather than replace) parent metadata

    return {
        metadataBase: new URL('https://nhasoc.com'),
        alternates: {
            canonical: `https://nhasoc.com/products/category/${id}`,
            languages: {
                'vi': '/vi'
            }
        },
        title: 'Nhà Sóc Store | ' + product[0].category?.metaTitle,
        description: product[0].category?.metaDescription,
        applicationName: 'Nhà Sóc Store',
        authors: [{ name: 'jame' }, { name: 'johson', url: 'https://nhasoc.com' }],
        keywords: product[0].category?.metaKeyword,
        colorScheme: 'light',
        creator: 'jamejohson',
        openGraph: {
            title: 'Nhà Sóc Store | ' + product[0].metaTitle,
            description: product[0].category?.metaDescription,
            url: 'https://nhasoc.com',
            siteName: 'Nhà Sóc Store | Official Website',
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

const page = async ({ params }: Props) => {

    const products: IProduct[] = await getProduct(params.id);

    return (
        <div className='flex flex-col'>

            <div className='flex items-center justify-between pb-2'>
                <div>
                    <span>{products.length} Sản phẩm</span>
                </div>

                <div className='md:hidden lg:hidden xl:hidden'>
                    <CategoryDropdownMenu />
                </div>

            </div>

            <ProductCard products={products} />

        </div>
    )
}

export default page