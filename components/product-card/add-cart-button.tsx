'use client'
import { useStore } from '@/hooks/useStore';
import { addToBasket } from '@/store/actions';
import { IProduct } from '@/util/constant'
import React from 'react'

const AddToCartButton = ({ product, quantity }: { product: IProduct, quantity?: number }) => {
    const { state, dispatch } = useStore();

    const basket = state.basket;
    return (
        <button className='w-full h-9 bg-sky-300 hover:bg-sky-400 transition-all transform duration-300 delay-100 text-white active:ring-2'
            onClick={() => dispatch(addToBasket(product, basket, quantity))}
        >Thêm giỏ hàng</button>
    )
}

export default AddToCartButton