import React from "react";
import Slider from "../slider/slider";
import Featured from "../featured/featured";
import { IProduct } from "@/util/constant";
import NewProduct from "../new-product/new-product";
import NewsLetter from "../news-letter/news-letter";

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
