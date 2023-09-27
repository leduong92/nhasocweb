
import * as React from "react"

import { Button } from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ICategory } from "@/util/constant";
import Link from "next/link";

async function getCategories() {
    let res = await fetch(`${process.env.BASE_URL}/Category`);
    return res.json();
}


const CategoryDropdownMenu = async () => {

    const categories: ICategory[] = await getCategories();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
                <div className="grid gap-4 p-1">
                    {categories.map((itm) => (
                        <div key={itm.id}>
                            <Link href={`/products/category/${itm.id}`}>{itm.displayName}</Link>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default CategoryDropdownMenu