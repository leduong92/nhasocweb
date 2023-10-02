"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const ReadMoreButton = ({ id }: { id: number }) => {

    const router = useRouter()

    return (
        <Button className='mt-2' onClick={() => router.push(`/blog/${id}`)} >Read More</Button>
    )
}

export default ReadMoreButton