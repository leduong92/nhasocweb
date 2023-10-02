import ResultCount from '@/components/layout/search/filter/result-cout';
import Pagination from '@/components/layout/search/pagination/pagination';
import Grid from '@/components/product/grid';
import ProductGridItems from '@/components/product/grid/product-grid-items';
import { getProducts } from '@/lib';
import { defaultSort, sorting } from '@/util/constant';
import React, { Suspense } from 'react'

export const metadata = {
    title: 'Nhà Sóc Store | Search',
    description: 'Search for products in the store.'
};

const SearchPage = async ({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) => {

    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
    const { pageIndex } = searchParams as { [key: string]: string };
    const products = await getProducts({ query: searchValue, reverse, sortKey, pageIndex });
    const resultsText = products.results.length > 1 ? 'results' : 'result';

    return (
        <Suspense>
            {searchValue ? (
                <p className="mb-4">
                    {products.results.length === 0
                        ? 'There are no products that match '
                        : `Showing ${products.results.length} ${resultsText} for `}
                    <span className="font-bold">&quot;{searchValue}&quot;</span>
                </p>
            ) : <ResultCount products={products} />}

            {products.results.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={products.results} />
                </Grid>
            ) : null}

            {products.numberOfPage > 1 ? <Pagination
                totalItems={products.totalCount}
                currentPage={products.pageIndex}
                itemsPerPage={products.pageSize}
            /> : null}

        </Suspense>
    )
}

export default SearchPage