import { getCategories, getFeatureds } from '@/lib';
import { MetadataRoute } from 'next'

type Route = {
    url: string;
    lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // const routesMap = [''].map((route) => ({
    //     url: `${baseUrl}${route}`,
    //     lastModified: new Date().toISOString(),
    //     priority: 1,
    // }));

    // const collectionsPromise = getCategories().then((collections) =>
    //     collections.map((collection) => ({
    //         url: `${baseUrl}/search/${collection.urlCode}`,
    //         lastModified: new Date().toISOString()
    //     }))
    // );

    // const productsPromise = getFeatureds().then((products) =>
    //     products.map((product) => ({
    //         url: `${baseUrl}/product/${product.id}`,
    //         lastModified: new Date().toISOString()
    //     }))
    // );

    // let fetchedRoutes: Route[] = [];

    // try {
    //     fetchedRoutes = (await Promise.all([collectionsPromise, productsPromise])).flat();
    // } catch (error) {
    //     throw JSON.stringify(error, null, 2);
    // }

    return [
        // ...routesMap,
        // ...fetchedRoutes,
        {
            url: 'https://nhasoc.io.vn/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://nhasoc.io.vn/contact-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/refund',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/term-of-service',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/shipping-policy',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },

    ]
}
