export interface IProduct {
    id: number,
    name: string,
    sku: string,
    urlCode: string,
    displayName: string,
    description: string,
    imageUrl: string,
    seoAlias: string,
    metaTitle: string,
    metaKeyword: string,
    metaDescription: string,
    price: number,
    originalPrice: number,
    discount: number,
    isFeatured: boolean,
    isNew: boolean,
    isBestSeller: boolean,
    category: ICategory,
    productImages: IProductImage[]
}

export interface IProductImage {
    url: string,
    caption: string,
    isDefault: boolean,
    sortOrder: number,
    fileSize: number,
    blurHash: string
}

export interface IProductPaging {
    pageIndex: number,
    pageSize: number,
    numberOfPage: number,
    totalCount: number,
    firstRowOnPage: number,
    lastRowOnPage: number,
    results: IProduct[]
}

export interface ICategory {
    id: string,
    name: string,
    displayName: string,
    urlCode: string,
    isShowOnHome: boolean,
    sortOrder: number,
    seoAlias: string,
    metaTitle: string,
    metaKeyword: string,
    metaDescription: string,
    imageUrl: string,
}

export interface IBasket {
    items: IBasketItem[];
}

export interface IBasketItem {
    id: number;
    sku: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    category: string;
}

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