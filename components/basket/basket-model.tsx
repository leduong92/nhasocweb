"use client"

import React from 'react'
import { Button } from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useStore } from '@/hooks/useStore'
import { Label } from '@radix-ui/react-dropdown-menu'
import { formatCurrency } from '@/util/formatCurrency'
import { useRouter } from 'next/navigation';
import BasketItem from './basket-item'

const CartModel = () => {

    const { state, dispatch } = useStore();
    const router = useRouter()

    const basketQuantity = state.basket.items?.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const basket = state.basket;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <div className='text-[14px] cursor-pointer relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span className='flex items-center justify-center absolute top-[-12px] right-[-12px] w-5 h-5 rounded-full text-[12px] bg-sky-300 text-white'>
                            {basketQuantity}
                        </span>
                    </div>

                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
                <div className="grid gap-4 p-1">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none text-gray-500">Giỏ hàng của bạn</h4>
                    </div>
                    <div className="grid gap-2">
                        {state.basket.items.map((item, idx) => (
                            <BasketItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className='flex justify-between'>
                        <Label>Tạm tính ({basketQuantity} sản phẩm):</Label>
                        <Label>{formatCurrency(basket.items.reduce((total, item) => {
                            return total + ((item.price || 0) * item.quantity)
                        }, 0))}</Label>
                    </div>
                    <div className='flex w-full'>
                        <Button className='w-full' onClick={() => router.push('/order')} >Đặt hàng</Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default CartModel