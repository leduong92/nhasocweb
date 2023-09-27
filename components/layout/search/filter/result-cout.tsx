import { IProduct, IProductPaging } from '@/util/constant'
import React from 'react'

const ResultCount = ({ products }: { products: IProductPaging }) => {
    return (
        <>
            {products.results.length > 0 ? (
                <div className='pb-3'>
                    Showing {(products.pageIndex - 1) * (products.pageSize + 1)}-{products.pageIndex * products.pageSize > products.totalCount ? products.totalCount : products.pageIndex * products.pageSize} of {products.totalCount} products
                </div>
            ) : null}

        </>

    )
}

export default ResultCount