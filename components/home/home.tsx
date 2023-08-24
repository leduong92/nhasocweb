import React from "react";
import Slider from "../slider/slider";
import Featured from "../featured/featured";
import Image from "next/image";
import { IProduct } from "@/util/constant";
import NewProduct from "../new-product/new-product";
import NewsLetter from "../news-letter/news-letter";

async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");

    return res.json()
}


const HomePage = async () => {

    const products: IProduct[] = await getProducts();

    return (
        <div >
            <Slider />

            <Featured products={products} />

            <NewProduct />

            <NewsLetter />
        </div>
    )
};

export default HomePage;
