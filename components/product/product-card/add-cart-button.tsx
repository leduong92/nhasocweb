'use client'
import { useStore } from '@/hooks/useStore';
import { addToBasket } from '@/store/actions';
import { IProduct } from '@/util/constant'
import React from 'react'

const AddToCartButton = ({ product, quantity }: { product: IProduct, quantity?: number }) => {
    const { state, dispatch } = useStore();

    const basket = state.basket;
    return (
        <button className='w-full h-11 bg-sky-500 hover:bg-sky-700 transition-all transform duration-300 delay-100 text-white active:ring-2'
            onClick={() => dispatch(addToBasket(product, basket, quantity))}
        >Thêm giỏ hàng</button>
    )
}

export default AddToCartButton