
import { IProductPaging } from '@/lib/model'
import React from 'react'

const ResultCount = ({ products }: { products: IProductPaging }) => {
    return (
        <>
            {products.results.length > 0 ? (
                <div className='hidden pb-3 text-xs text-neutral-500 md:block'>
                    Showing {(products.pageIndex - 1) * (products.pageSize + 1)}-{products.pageIndex * products.pageSize > products.totalCount ? products.totalCount : products.pageIndex * products.pageSize} of {products.totalCount} products
                </div>
            ) : null}

        </>

    )
}

export default ResultCount