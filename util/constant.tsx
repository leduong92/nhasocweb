export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
}

export interface ICategory {
    id: number,
    categoryName: string,
    url_code: string,
    description: string
}
