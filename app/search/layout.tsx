import Collections from '@/components/layout/search/filter/collections'
import FilterList from '@/components/layout/search/filter'
import { sorting } from '@/util/constant'
import React, { Suspense } from 'react'
import BreadCrumb from '@/components/layout/bread-crumb'

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense>

            <BreadCrumb router={`search`} name='Sản phẩm' />
            <div className='container'>
                <div className="mx-auto flex max-w-screen-2xl flex-col gap-8  text-black dark:text-white md:flex-row py-3">
                    <div className="order-first w-full flex-none md:max-w-[135px]">
                        <Collections />
                    </div>
                    <div className="order-last min-h-screen w-full md:order-none">{children}</div>
                    <div className="order-none flex-none md:order-last md:w-[135px]">
                        <FilterList list={sorting} title="Sắp xếp" />
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default SearchLayout