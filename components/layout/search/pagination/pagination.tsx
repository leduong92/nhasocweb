
import usePagination from '@/hooks/usePagination';
import { dotts } from '@/util/constant';
import React from 'react';
import PaginatedPage from './paginated';

export type PaginationProps = {
    totalItems: number,
    currentPage: number,
    itemsPerPage?: number,
}

const Pagination = ({ totalItems, currentPage, itemsPerPage = 6 }: PaginationProps) => {

    const pages = usePagination(totalItems, currentPage, itemsPerPage)

    return (
        <div>
            <Paginated pages={pages} />
        </div>
    )
}

function Paginated({ pages }: { pages: any[] }) {
    return (
        <div className="flex items-center justify-center my-8">
            {pages.map((pageNumber, i) =>
                pageNumber === dotts ? (
                    <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-semibold text-black"
                    >
                        {pageNumber}
                    </span>
                ) : (
                    <PaginatedPage key={i} pageNumber={pageNumber} />
                )
            )}
        </div>
    )
}


export default Pagination