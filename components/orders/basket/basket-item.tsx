import Price from "@/components/price";
import { useStore } from "@/hooks/useStore";
import { decreaseBasketQuantity, increaseBasketQuantity, removeBasketItem } from "@/store/actions";
import Image from "next/image";
import Link from "next/link";

const BasketItem = ({ isShowbutton }: { isShowbutton: boolean }) => {

    const { state, dispatch } = useStore();

    const basket = state.basket;

    const total = basket.items.reduce((total, item) => {
        return total + ((item.price || 0) * item.quantity)
    }, 0);


    return (
        <>
            <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                <ul className="flex-grow overflow-auto py-4">
                    {state.basket.items.map((item, idx) => {
                        return (
                            <li
                                key={item.id}
                                className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                            >
                                <div className='relative flex w-full flex-row justify-between px-1 py-4'>
                                    <div className='absolute z-40 -mt-2 ml-[55px]'>
                                        <button onClick={() => dispatch(removeBasketItem(item, basket))} aria-label="Remove cart item" className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                                    </div>
                                    <Link
                                        href={``}
                                        className="z-30 flex flex-row space-x-4"
                                    >
                                        <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                            <Image
                                                className="h-full w-full object-cover"
                                                width={64}
                                                height={64}
                                                alt={
                                                    item.name
                                                }
                                                src={`${process.env.BASE_IMAGE_URL}${item.imageUrl}`}
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col text-base">
                                            <span className="leading-tight">
                                                {item.name}
                                            </span>
                                            {item.sku ? (
                                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                    {item.sku}
                                                </p>
                                            ) : null}
                                        </div>
                                    </Link>

                                    <div className="flex h-16 flex-col justify-between">
                                        <Price
                                            className="flex justify-end space-y-2 text-right text-sm"
                                            amount={item.price}
                                            currencyCode=''
                                        />
                                        <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                            <button onClick={() => dispatch(decreaseBasketQuantity(item, basket))} disabled={item.quantity === 1 ? true : false} aria-label="Reduce item quantity" className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 dark:text-neutral-500"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"></path></svg></button>

                                            <p className="w-6 text-center">
                                                <span className="w-full text-sm">{item.quantity}</span>
                                            </p>
                                            <button onClick={() => dispatch(increaseBasketQuantity(item, basket))} aria-label="Increase item quantity" className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 dark:text-neutral-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Tổng</p>
                        <Price
                            className="text-right text-base text-black dark:text-white"
                            amount={total}
                            currencyCode={''}
                        />
                    </div>
                </div>
                {isShowbutton ? <Link
                    href={`/order`}
                    className="block w-full rounded-full bg-sky-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                >
                    Đặt hàng
                </Link> : null}
            </div>
        </>
    )
}

export default BasketItem