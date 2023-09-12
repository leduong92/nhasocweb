import { useStore } from '@/hooks/useStore'
import { decreaseBasketQuantity, increaseBasketQuantity, removeBasketItem } from '@/store/actions';
import { IBasketItem } from '@/util/constant'
import React from 'react'
import { Button } from '../ui/button';
import { formatCurrency } from '@/util/formatCurrency';
import Image from 'next/image';


const BasketItem = ({ item }: { item: IBasketItem }) => {

    const { state, dispatch } = useStore();

    const basket = state.basket;

    return (
        <div className='flex flex-col border-b gap-3 py-3'>
            <div className='flex justify-between items-center gap-5'>
                <div className='relative w-28 h-28 bg-slate-300 '>
                    <Image
                        src={`${process.env.BASE_IMAGE_URL}${item.imageUrl}`}
                        fill
                        alt={item.name}
                        title={item.name}
                    />
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                    <div>
                        <h1>Sku: {item.sku}</h1>
                        <span>{item.name}</span>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <Button size="msm" onClick={() => dispatch(decreaseBasketQuantity(item, basket))} disabled={item.quantity === 1 ? true : false} >-</Button>
                            <div>{item.quantity}</div>
                            <Button size="msm" onClick={() => dispatch(increaseBasketQuantity(item, basket))} >+</Button>
                        </div>
                        <div>
                            <Button variant="destructive" size="msm" onClick={() => dispatch(removeBasketItem(item, basket))} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                            </Button>
                        </div>
                    </div>
                    <div>
                        <span>Tổng: {formatCurrency(item.quantity * item.price)}</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BasketItem