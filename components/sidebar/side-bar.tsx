"use client"
import React, { useState } from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='block md:hidden lg:hidden' onClick={() => setOpen(!open)}>
            <Sheet>
                <SheetTrigger>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </SheetTrigger>
                <SheetContent>
                    <div>Nhà Sóc Store</div>
                    <div className='flex flex-col'>
                        <span>Macca</span>
                        <span>Macca</span>
                        <span>Macca</span>
                        <span>Macca</span>
                    </div>
                </SheetContent>
            </Sheet>
        </div>

    )
}

export default Sidebar