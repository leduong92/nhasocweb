"use client"
import { useStore } from '@/hooks/useStore';
import { IBasket } from '@/util/constant';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { formatCurrency } from '@/util/formatCurrency';
import BasketItem from '../basket/basket-item';

const OrderPage = () => {
    const { state, dispatch } = useStore();
    const [mess, setMess] = useState('');
    const router = useRouter();

    const basketQuantity = state.basket.items?.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const basket = state.basket;

    const [order, setOrder] = useState({
        buyerPhoneNumber: "",
        buyerAdress: "",
        buyerName: "",
        buyerEmail: "",
        orderItems: {} as IBasket
    })

    const handleChange = (e: any) => {
        setOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (order.buyerPhoneNumber.length > 0) {
            setMess('');
        }
        setOrder((prev) => ({
            ...prev, orderItems: {
                items: [...basket.items]
            }
        }));
    }

    const handleSubmit = async () => {
        if (!order.buyerPhoneNumber) {
            setMess('Yêu cầu nhập số điện thoại');
            return;
        }
        if (order.buyerPhoneNumber.length <= 9) {
            setMess('Bạn nhập số điện thoại');
            return;
        }

        const result = await fetch(`${process.env.BASE_URL}/order`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

        if (result) {
            router.push("/order-success")
        }
    }
    return (
        <>
            <div className='flex flex-col gap-2 rounded-md '>
                <div className="grid gap-2">
                    <BasketItem />
                </div>

            </div>
            <div className='flex flex-col gap-3  sticky top-[130px] py-4'>
                <div className='flex flex-col gap-2'>
                    <div className="grid w-full items-center gap-1.5">
                        <div>
                            <Label htmlFor="buyerName">Họ và tên</Label>
                        </div>
                        <Input type="text" name='buyerName' id="buyerName" onChange={handleChange} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <div>
                            <Label htmlFor="buyerEmail">Email</Label>
                        </div>
                        <Input type="text" name='buyerEmail' id="buyerEmail" onChange={handleChange} />
                    </div>
                    <div className="grid w-full items-center gap-3 pt-1">
                        <div className='flex justify-between '>
                            <Label htmlFor="buyerPhoneNumber">Số điện thoại</Label>
                            {mess ? <Label className='text-red-900'>{mess}</Label> : <Label></Label>}
                        </div>
                        <Input type="number" id="buyerPhoneNumber" name="buyerPhoneNumber" onChange={handleChange} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <div>
                            <Label htmlFor="buyerAdress">Địa chỉ</Label>
                        </div>
                        <Textarea id="buyerAdress" name='buyerAdress' onChange={handleChange} />
                    </div>
                </div>
                <div className='w-full'>
                    <Button className='w-full' onClick={handleSubmit}>Đặt hàng</Button>
                </div>

            </div>
        </>
    )
}

export default OrderPage