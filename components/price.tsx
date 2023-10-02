
import React from 'react'

type PriceProps = {
    amount: number;
    className?: string;
    currencyCode?: string;
    currencyCodeClassName?: string;
}

const CURRENCY_FORMATTER = new Intl.NumberFormat("vi-VN", {
    currency: "VND",
    style: "currency",
})

const Price = ({
    amount,
    className,
    currencyCode = 'VND',
    currencyCodeClassName }: PriceProps & React.ComponentProps<'p'>) => {

    return (
        <p suppressHydrationWarning={true} className={className}>
            {CURRENCY_FORMATTER.format(amount)}
            {/* <span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span> */}
        </p>
    )
}

export default Price