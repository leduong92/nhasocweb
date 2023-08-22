"use client"
import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SortCategoryMenu() {

    return (
        <Select>
            <SelectTrigger >
                <SelectValue placeholder="Select a value" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="bestSeller">Best seller</SelectItem>
                    <SelectItem value="productaz">Product (A-Z)</SelectItem>
                    <SelectItem value="productza">Product (Z-A)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}