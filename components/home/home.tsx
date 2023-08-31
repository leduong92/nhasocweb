import React from "react";
import Slider from "../slider/slider";
import Featured from "../featured/featured";
import Image from "next/image";
import { IProduct } from "@/util/constant";
import NewProduct from "../new-product/new-product";
import NewsLetter from "../news-letter/news-letter";

async function getFeatureds() {
    let res = await fetch("http://localhost:5000/api/Product/featureds");

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
