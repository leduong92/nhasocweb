import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoLink = () => {
    return (
        <Link href="/" className='font-bold text-lg'>
            <Image
                src={"/logo.svg"}
                alt='Nhà Sóc Store'
                title='Nhà Sóc Store'
                width={200}
                height={100}
                style={{ width: '70%', height: 'auto' }}
                sizes='100vw'
            />
        </Link>
    )
}

export default LogoLink