"use client"
import React from 'react'
import { ListItem, PathFilterItem } from '.'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link';
import clsx from 'clsx';
import { SortFilterItem, urlParameters } from '@/util/constant';
import { createUrl } from '@/util';


function PathFilterItem({ item }: { item: PathFilterItem }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const active = pathname === '/search/' + item.urlCode;
    const newParams = new URLSearchParams(searchParams.toString());
    const DynamicTag = active ? 'p' : Link;

    const pageIndexSearchParam = searchParams.get(urlParameters.pageIndex);
    const pageIndex = pageIndexSearchParam ? parseInt(pageIndexSearchParam) : 0;

    if (pageIndex > 1) {
        newParams.delete(urlParameters.pageIndex)
    }

    newParams.delete('q');

    return (
        <li className="mt-2 flex text-black dark:text-white" key={item.name}>
            <DynamicTag
                href={`/search/${createUrl(item.urlCode, newParams)}`}
                className={clsx(
                    'w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100',
                    {
                        'underline underline-offset-4': active
                    }
                )}
            >
                {item.name}
            </DynamicTag>
        </li>
    );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const active = searchParams.get('sort') === item.slug;
    const q = searchParams.get('q');

    const href = createUrl(
        pathname,
        new URLSearchParams({
            ...(q && { q }),
            ...(item.slug && item.slug.length && { sort: item.slug })
        })
    );
    const DynamicTag = active ? 'p' : Link;


    return (
        <li className="mt-2 flex text-sm text-black dark:text-white" key={item.title}>
            <DynamicTag
                prefetch={!active ? false : undefined}
                href={href}
                className={clsx('w-full hover:underline hover:underline-offset-4', {
                    'underline underline-offset-4': active
                })}
            >
                {item.title}
            </DynamicTag>
        </li>
    );
}

const FilterItem = ({ item }: { item: ListItem }) => {
    return 'urlCode' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}

export default FilterItem   