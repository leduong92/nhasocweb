import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoLink = () => {
    return (
        <Link href="/" className='font-bold text-lg w-44 md:w-56 lg:w-64'>
            <Image
                src={"/logo.svg"}
                alt='Nhà Sóc Store'
                title='Nhà Sóc Store'
                width={300}
                height={100}
                style={{ height: 'auto' }}
                sizes='100vw'
            />
        </Link>
    )
}

export default LogoLink