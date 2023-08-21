export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    categories: ICategory
}

export interface ICategory {
    id: number;
    title: string
}