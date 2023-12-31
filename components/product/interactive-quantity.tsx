"use client"
import React, { useState } from 'react'
import { IProduct } from '@/lib/model';
import AddToCartButton from './add-cart-button';

const InteractiveQuantity = ({ product }: { product: IProduct }) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <div className='flex items-center gap-5 py-5'>
                <button onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
                    className='w-12 h-12 flex items-center justify-center cursor-pointer border '
                >-</button>
                {quantity}
                <button onClick={() =>
                    setQuantity((prev) => (prev + 1))}
                    className='w-12 h-12 flex items-center justify-center cursor-pointer border '
                >+</button>
            </div>

            <AddToCartButton product={product} quantity={quantity} />
        </>


    )
}

export default InteractiveQuantity