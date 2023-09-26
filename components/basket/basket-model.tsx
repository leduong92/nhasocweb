"use client"
import React from 'react'
import { useStore } from '@/hooks/useStore'
import BasketItem from './basket-item'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

const CartModel = () => {
    const { state, dispatch } = useStore();

    const basketQuantity = state.basket.items?.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    return (
        <Sheet >
            <SheetTrigger>
                <div className='text-[14px] cursor-pointer relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className='flex items-center justify-center absolute top-[-12px] right-[-12px] w-5 h-5 rounded-full text-[12px] bg-sky-300 text-white'>
                        {basketQuantity}
                    </span>
                </div>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]  bg-black/30">
                <div className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px]">
                    <SheetHeader>
                        <SheetTitle><h4 className="font-medium leading-none text-gray-500">Giỏ hàng của bạn</h4></SheetTitle>
                    </SheetHeader>

                    {state.basket.items.length == 0 ? (
                        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">

                            <p className="mt-6 text-center text-2xl font-bold">Chưa có sản phẩm.</p>
                        </div>
                    ) : (
                        <BasketItem />
                    )}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default CartModel