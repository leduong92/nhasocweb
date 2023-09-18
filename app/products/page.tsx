import CategoryDropdownMenu from '@/components/category-dropdown-menu/category-dropdown-menu';
import ProductCard from '@/components/product-card/product-card';
import { IProductPaging } from '@/util/constant';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Nhà Sóc Store | Sản phẩm",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    alternates: {
        canonical: 'https://nhasoc.com/products',
        languages: {
            'vi': '/vi'
        }
    },
    applicationName: 'Nhà Sóc Store',
    authors: [{ name: 'jame' }, { name: 'johson', url: 'https://nhasoc.com' }],
    keywords: ['Nhà Sóc, Mác Ca, Macca, Hạt điều, Granola, Hạnh nhân, dinh dưỡng'],
    colorScheme: 'light',
    creator: 'jamejohson',

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
};

async function getProducts() {
    let res = await fetch(`${process.env.BASE_URL}/Product/`);
    return res.json();
}


const Page = async () => {

    const data: IProductPaging = await getProducts();

    return (
        <>
            <div className='flex items-center justify-between '>
                <div>
                    <span>{data.totalCount} Sản phẩm</span>
                </div>

                <div className='md:hidden lg:hidden xl:hidden'>
                    <CategoryDropdownMenu />
                </div>

            </div>
            <ProductCard products={data.results} />
        </>
    )
}

export default Page