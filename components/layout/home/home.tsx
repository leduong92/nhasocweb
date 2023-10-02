import React from "react";
import Slider from "./slider";
import Featured from "./featured";
import NewProduct from "./new-product";
import NewsLetter from "./news-letter";
import { getFeatureds, getNewProducts } from "@/lib";
import { IProduct } from "@/lib/model";

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
