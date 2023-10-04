import { Locale } from '@/i18n.config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../public/logo.svg'

const LogoLink = ({ lang }: { lang: Locale }) => {
    return (
        <Link href={`/${lang}`} className='font-bold text-lg w-44 md:w-56 lg:w-68 xl:w-72'>
            <Image
                src={Logo}
                alt='Nhà Sóc Store'
                title='Nhà Sóc Store'
                width={400}
                height={100}
                style={{ width: '100%', height: 'auto' }}
                sizes='100vw'
            />
        </Link>
    )
}

export default LogoLink