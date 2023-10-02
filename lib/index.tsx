import { ICategory, IProduct, IProductPaging } from "./model";

export async function getCategories(): Promise<ICategory[]> {
    let res = await fetch(`${process.env.BASE_URL}/Category`);
    return res.json();
}

export async function getFeatureds(): Promise<IProduct[]> {

    let res = await fetch(`${process.env.BASE_URL}/Product/featureds`);

    return res.json()
}

export async function getNewProducts(): Promise<IProduct[]> {

    let res = await fetch(`${process.env.BASE_URL}/Product/newproducts`);

    return res.json()
}

type GetCollectionProductProps = {
    category?: string,
    reverse?: boolean,
    sortKey?: string
}
export async function getCollectionProducts({ category, reverse, sortKey }: GetCollectionProductProps): Promise<IProductPaging> {

    let res = await fetch(`${process.env.BASE_URL}/Product/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'category': category,
            'reverse': reverse,
            'sortKey': sortKey
        }),
        next: {
            revalidate: 0
        }
    });

    return res.json();
}
type GetProductProps = {
    query?: string,
    reverse?: boolean,
    sortKey?: string,
    pageIndex: string
}
export async function getProducts({ query, reverse, sortKey, pageIndex }: GetProductProps): Promise<IProductPaging> {
    let res = await fetch(`${process.env.BASE_URL}/Product/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'category': query,
            'reverse': reverse,
            'sortKey': sortKey,
            'pageIndex': pageIndex
        }),
    });
    return res.json();
}

export async function getProduct(id: string) {
    let res = await fetch(`${process.env.BASE_URL}/Product/${id}`);

    return res.json()
}

type SlideProps = {
    imgUrl: string,
    base64: string,
    title: string,
    url: string,
    description: string,
}
export const imagesSlider: SlideProps[] = [
    { imgUrl: "/ma_2.jpg", base64: "", title: "Hạt Macca", url: '/search/hat-macca', description: "Hạt Macca là hạt giống của cây macadamia, có nguồn gốc từ Úc và được trồng ở nhiều nơi trên thế giới, chằng hạn như Brazil, Costa Rica, Hawaii, New Zealand, trong đó có Việt Nam..." },
    { imgUrl: "/m_1.jpg", base64: "", title: "Granola", url: '/search/granola', description: "Granola là món ăn quen thuộc của người Mỹ vào buổi sáng, đây là hỗn hợp của nhiều thực phẩm lành lạnh với hàm lượng chất dinh dưỡng cao, nhất là giàu protein." },
    { imgUrl: "/h_4.jpg", base64: "", title: "Hạnh Nhân", url: '/search/hanhnhan', description: "Hạnh nhân là một trong những loại hạt phổ biến trên thế giới. Thành phần dinh dưỡng của hạnh nhân giàu chất béo lành mạnh, chất chống oxy hóa, vitamin và khoáng chất." },
    { imgUrl: "/o_1.jpg", base64: "", title: "Quả Óc Chó", url: '/search/hat-oc-cho', description: "Quả óc chó có nguồn gốc ở khu vực Địa Trung Hải và Trung Á. Óc chó giàu chất béo omega-3 và chứa lượng chất chống oxy hóa cao hơn hầu hết các loại thực phẩm khác." },
    { imgUrl: "/h_1.jpg", base64: "", title: "Mix Hạt Dinh Dưỡng", url: '/search/mix-hat', description: "Mixed nuts là trộn hỗn hợp các loại hạt dinh dưỡng với nhau tạo thành 1 sản phẩm đa dạng hạt, việc mix các loại hạt dinh dưỡng giúp bạn đa dạng được các loại hạt bổ sung trong thực đơn hàng ngày." },
]
type NavLinkProps = {
    id: number,
    title: string,
    url: string,
}
export const Navlinks: NavLinkProps[] = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Sản phẩm",
        url: "/search",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about-us",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact-us",
    },
    {
        id: 6,
        title: "Customize",
        url: "/customize",
    },
];

type BlogsDataProps = {
    id: number,
    title: string,
    imageUrl: string,
    desc: string
}

export const BlogsData: BlogsDataProps[] = [
    {
        id: 1,
        title: "Hạt Macca",
        desc: "Hạt Macca là hạt giống của cây macadamia, có nguồn gốc từ Úc và được trồng ở nhiều nơi trên thế giới, chằng hạn như Brazil, Costa Rica, Hawaii, New Zealand, trong đó có Việt Nam...",
        imageUrl: "/ma_2.jpg",
    },
    {
        id: 2,
        title: "Granola",
        desc: "Granola là món ăn quen thuộc của người Mỹ vào buổi sáng, đây là hỗn hợp của nhiều thực phẩm lành lạnh với hàm lượng chất dinh dưỡng cao, nhất là giàu protein. Granola gồm các loại hạt dinh dưỡng từ trái cây khô, yến mạch,…. và được nướng giòn với màu nâu vàng trông rất đẹp mắt.",
        imageUrl: "/m_1.jpg",
    },
    {
        id: 3,
        title: "Hạt Hạnh Nhân",
        desc: "Hạnh nhân có nguồn gốc từ Trung Đông. Hạnh nhân được bán sống hoặc rang. Chúng cũng được sử dụng để sản xuất sữa hạnh nhân, dầu, bơ, bột hoặc bột nhão. Trong 28 gram hạnh nhân có chứa hàm lượng chất...",
        imageUrl: "/h_4.jpg",
    },
    {
        id: 4,
        title: "Hạt Óc Chó",
        desc: "Quả óc chó có nguồn gốc ở khu vực Địa Trung Hải và Trung Á. Óc chó giàu chất béo omega-3 và chứa lượng chất chống oxy hóa cao hơn hầu hết các loại thực phẩm khác...",
        imageUrl: "/o_1.jpg",
    },
    {
        id: 5,
        title: "Mix Hạt Dinh Dưỡng",
        desc: "Mixed nuts là trộn hỗn hợp các loại hạt dinh dưỡng với nhau tạo thành 1 sản phẩm đa dạng hạt, việc mix các loại hạt dinh dưỡng giúp bạn đa dạng được các loại hạt bổ sung trong thực đơn hàng ngày...",
        imageUrl: "/h_1.jpg",
    }
]
