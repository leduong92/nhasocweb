import React from "react";
import Slider from "../slider/slider";
import Featured from "../featured/featured";
import Image from "next/image";
import { IProduct } from "@/util/constant";
import NewProduct from "../new-product/new-product";
import NewsLetter from "../news-letter/news-letter";

async function getFeatureds() {
    console.log(process.env.BASE_URL)
    let res = await fetch(`${process.env.BASE_URL}/Product/featureds`);

    return res.json()
}

const HomePage = async () => {

    const featureds: IProduct[] = await getFeatureds();

    return (
        <div >
            <Slider />

            <Featured products={featureds} />

            <NewProduct />

            <NewsLetter />
        </div>
    )
};

export default HomePage;
