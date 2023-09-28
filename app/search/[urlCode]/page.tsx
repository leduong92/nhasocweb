
import React from 'react';
import { IProductPaging, defaultSort, sorting } from '@/util/constant';
import Grid from '@/components/product/grid';
import ProductGridItems from '@/components/product/grid/product-grid-items';
import ResultCount from '@/components/layout/search/filter/result-cout';
import Pagination from '@/components/layout/search/pagination/pagination';

type GetProductProps = {
    category?: string,
    reverse?: boolean,
    sortKey?: string
}
export const revalidate = 0


async function getCollectionProducts({ category, reverse, sortKey }: GetProductProps): Promise<IProductPaging> {

    let res = await fetch(`${process.env.BASE_URL}/Product/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'category': category,
            'reverse': reverse,
            'sortKey': sortKey
        }),
        next: {
            revalidate: 0
        }
    });

    return res.json();
}

export default async function CategoryPage({
    params,
    searchParams
}: {
    params: { urlCode: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const { sort } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

    const products = await getCollectionProducts({ category: params.urlCode, sortKey, reverse });

    return (
        <section>

            <ResultCount products={products} />

            {products.results.length === 0 ? (
                <p className="py-3 text-lg">{`No products found in this collection`}</p>
            ) : (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={products.results} />
                </Grid>
            )}

            {products.numberOfPage > 1 ? <Pagination
                totalItems={products.totalCount}
                currentPage={products.pageIndex}
                itemsPerPage={products.pageSize}
            /> : null}
        </section>
    );
}
