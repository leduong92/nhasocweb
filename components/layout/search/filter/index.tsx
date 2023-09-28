import { SortFilterItem } from '@/util/constant'
import React from 'react'
import FilterItemDropdown from './dropdown';
import FilterItem from './item';
export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { id: string, name: string; urlCode: string };

function FilterItemList({ list }: { list: ListItem[] }) {
    return (
        <>
            {list.map((item: ListItem, i) => (
                <FilterItem key={i} item={item} />
            ))}
        </>
    )
}

const FilterList = ({ list, title }: { list: ListItem[]; title?: string }) => {
    return (
        <>
            <nav>
                {title ? <h3 className='hidden text-xs text-neutral-500 md:block'>{title}</h3> : null}
                <ul className='hidden md:block'>
                    <FilterItemList list={list} />
                </ul>
                <ul className='md:hidden'>
                    <FilterItemDropdown list={list} />
                </ul>
            </nav>
        </>
    )
}

export default FilterList