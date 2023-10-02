export type SortFilterItem = {
    title: string;
    slug: string | null;
    sortKey: 'NEWEST' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE',
    reverse: boolean;
}

export const defaultSort: SortFilterItem = {
    title: 'Newest',
    slug: null,
    sortKey: 'NEWEST',
    reverse: false
}

export const sorting: SortFilterItem[] = [
    defaultSort,
    { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
    { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
    { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
    { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
]

export const dotts = '...'

export const urlParameters = {
    pageIndex: 'pageIndex'
}