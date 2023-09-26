import { MetadataRoute } from 'next'

type Route = {
    url: string;
    lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_URL
    ? `https://${process.env.NEXT_PUBLIC_URL}`
    : 'http://localhost:3000';


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://nhasoc.io.vn',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
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
        {
            url: 'https://nhasoc.io.vn/products/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/products/category/9084363c-2404-45c5-a611-673ba2846a6c',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/products/category/3b8472f6-2d18-4770-a449-d2f3a4ad09ef',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/products/category/76de0415-456b-44fa-9945-db3d3b7f1b87',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/products/category/71f8cfd2-f0ab-49ae-9059-b0df1109c016',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/products/category/22b875fb-62de-4b86-acdd-52ee130b1bb8',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nhasoc.io.vn/product-detail/37ad7bb3-21a3-4afd-9fd0-fc8b6a6efbdb',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },

    ]
}


// import { getCollections, getPages, getProducts } from 'lib/bigcommerce';
// import { MetadataRoute } from 'next';

// type Route = {
//   url: string;
//   lastModified: string;
// };

// const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
//   : 'http://localhost:3000';

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const routesMap = [''].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date().toISOString()
//   }));

//   const collectionsPromise = getCollections().then((collections) =>
//     collections.map((collection) => ({
//       url: `${baseUrl}${collection.path}`,
//       lastModified: collection.updatedAt
//     }))
//   );

//   const productsPromise = getProducts({}).then((products) =>
//     products.map((product) => ({
//       url: `${baseUrl}${product.handle}`,
//       lastModified: product.updatedAt
//     }))
//   );

//   const pagesPromise = getPages().then((pages) =>
//     pages.map((page) => ({
//       url: `${baseUrl}/${page.handle}`,
//       lastModified: page.updatedAt
//     }))
//   );

//   let fetchedRoutes: Route[] = [];

//   try {
//     fetchedRoutes = (await Promise.all([collectionsPromise, productsPromise, pagesPromise])).flat();
//   } catch (error) {
//     throw JSON.stringify(error, null, 2);
//   }

//   return [...routesMap, ...fetchedRoutes];
// }
