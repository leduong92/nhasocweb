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
