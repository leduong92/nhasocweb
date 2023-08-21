"use client"
import React, { useState } from 'react'


const InteractiveQuantity = () => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className='flex items-center gap-4 py-3'>
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
    )
}

export default InteractiveQuantity