import React from "react";
import Slider from "./slider";
import Featured from "./featured";
import { IProduct } from "@/util/constant";
import NewProduct from "./new-product";
import NewsLetter from "./news-letter";
async function getFeatureds() {

    let res = await fetch(`${process.env.BASE_URL}/Product/featureds`);

    return res.json()
}

async function getNewProducts() {

    let res = await fetch(`${process.env.BASE_URL}/Product/newproducts`);

    return res.json()
}

const HomePage = async () => {

    const featuredDatas: IProduct[] = await getFeatureds();
    const newProductDatas: IProduct[] = await getNewProducts();

    const [featureds, newProducts] = await Promise.all([featuredDatas, newProductDatas]);


    // const images = products[0].productImages.map(async (img) => ({
    //     ...img, blurHash: await dynamicBlurUrl(`${process.env.BASE_IMAGE_URL}${img.url}`)
    // }));

    return (
        <div >
            <Slider />
            <Featured products={featureds} />
            <NewProduct products={newProducts} />
            <NewsLetter />
        </div>
    )
};

export default HomePage;
