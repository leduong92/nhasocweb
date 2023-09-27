"use client"
import React, { useEffect, useRef, useState } from 'react'
import { ListItem } from '.'
import { usePathname, useSearchParams } from 'next/navigation';
import FilterItem from './item';

const FilterItemDropdown = ({ list }: { list: ListItem[] }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [active, setActive] = useState('');
    const [openSelect, setOpenSelect] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpenSelect(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        list.forEach((listItem: ListItem) => {
            if (('urlCode' in listItem && pathname === '/search/category/' + listItem.id)) {
                setActive(listItem.name);
            } else {
                if (
                    ('slug' in listItem && searchParams.get('sort') === listItem.slug)
                ) {
                    setActive(listItem.title);
                }
            }
        });
    }, [pathname, list, searchParams]);

    return (
        <div className="relative" ref={ref}>
            <div
                onClick={() => {
                    setOpenSelect(!openSelect);
                }}
                className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30"
            >
                <div>{active}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg>
            </div>
            {openSelect && (
                <div
                    onClick={() => {
                        setOpenSelect(false);
                    }}
                    className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black"
                >
                    {list.map((item: ListItem, i) => (
                        <FilterItem key={i} item={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default FilterItemDropdown