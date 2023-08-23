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
        <div className={`block md:hidden lg:hidden`} >
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
                            {/* <div className='text-[14px] cursor-pointer relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span className='flex items-center justify-center absolute top-[-12px] right-[-12px] w-5 h-5 rounded-full text-[12px] bg-blue-500 text-white'>12</span>
                            </div> */}
                            <div className='text-[14px] cursor-pointer relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <span className='flex items-center justify-center absolute top-[-12px] right-[-12px] w-5 h-5 rounded-full text-[12px] bg-blue-500 text-white'>12</span>
                            </div>

                            <DarkModeToggle />
                        </div>

                    </div>
                </SheetContent>
            </Sheet>
        </div>

    )
}

export default Sidebar