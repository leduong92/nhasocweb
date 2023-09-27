import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Label from '../../label'

type TileProps = {
    isInteractive?: boolean,
    active?: boolean,
    label?: {
        title?: string,
        amount: number,
        currencyCode?: string,
        position?: 'bottom' | 'center'
    }
}

const GridTileImage = ({ isInteractive = true, active, label, ...props }: TileProps & React.ComponentProps<typeof Image>) => {
    return (
        <div className={clsx('flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black p-3',
            {
                realative: label,
                'border-2 border-blue-600': active,
                'border-neutral-200 dark:border-neutral-800': !active
            })}>
            {props.src ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image
                    className={clsx('!relative h-full w-full object-cover', {
                        'transition duration-500 ease-in-out hover:scale-105': isInteractive
                    })}
                    {...props}
                />
            ) : null}
            {label ? (
                <Label
                    title={label.title}
                    amount={label.amount}
                    currencyCode={label.currencyCode}
                    position={label.position}
                />
            ) : null}
        </div>
    )
}

export default GridTileImage