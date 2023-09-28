import clsx from 'clsx';
import React, { Suspense } from 'react'
import FilterList from '.';

async function getCategories() {
    let res = await fetch(`${process.env.BASE_URL}/Category`);
    return res.json();
}


async function CollectionList() {
    const categories = await getCategories();
    return <FilterList list={categories} title="Các sản phẩm" />;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
const items = 'bg-neutral-400 dark:bg-neutral-700';

const Collections = () => {
    return (
        <Suspense
            fallback={
                <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
                    <div className={clsx(skeleton, activeAndTitles)} />
                    <div className={clsx(skeleton, activeAndTitles)} />
                    <div className={clsx(skeleton, items)} />
                    <div className={clsx(skeleton, items)} />
                    <div className={clsx(skeleton, items)} />
                    <div className={clsx(skeleton, items)} />
                    <div className={clsx(skeleton, items)} />
                    <div className={clsx(skeleton, items)} />
                    <div className={clsx(skeleton, items)} />
                    <div className={clsx(skeleton, items)} />
                </div>
            }
        >
            <CollectionList />
        </Suspense>
    )
}

export default Collections