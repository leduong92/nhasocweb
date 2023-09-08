"use client"
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import DarkModeToggle from '../darkmode/DarkModeToggle'
import LogoLink from '../logo-link/logo-link'

const Sidebar = () => {
    return (
        <div className='block md:hidden lg:hidden xl:hidden' >
            <Sheet>
                <SheetTrigger>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </SheetTrigger>
                <SheetContent>

                    <LogoLink />

                    <div className='flex flex-col pt-2 gap-2 border-t'>

                        <Link href={`/`}><SheetTrigger>Home</SheetTrigger></Link>
                        <Link href={`/products`}><SheetTrigger>Sản phẩm</SheetTrigger></Link>
                        <Link href={`/blog`}><SheetTrigger>Blog</SheetTrigger></Link>
                        <Link href={`/about-us`}><SheetTrigger>About</SheetTrigger></Link>
                        <Link href={`/contact-us`}><SheetTrigger>Contact</SheetTrigger></Link>

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