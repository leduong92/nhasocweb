"use client"
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle'
import LogoLink from './logo-link'
import Search from './search'

type LinkProps = {
    id: number,
    title: string,
    url: string,
}

const Sidebar = ({ links }: { links: LinkProps[] }) => {
    return (
        <div className='block md:hidden lg:hidden xl:hidden' >
            <Sheet key="left">
                <SheetTrigger >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </SheetTrigger>
                <SheetContent side="left">

                    <LogoLink />

                    <div className='flex flex-col pt-2 gap-2 border-t'>

                        <div className='py-4'>
                            <Search />
                        </div>

                        {links.map((itm) => (
                            <Link href={`/${itm.url}`} key={itm.id}>
                                <SheetTrigger>{itm.title}</SheetTrigger>
                            </Link>
                        ))}

                        <div className='flex items-center gap-4 pt-2'>
                            <DarkModeToggle />
                        </div>

                    </div>
                </SheetContent>
            </Sheet>
        </div>

    )
}

export default Sidebar