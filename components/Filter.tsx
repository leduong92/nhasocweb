"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Filter = ({ state }: any) => {
    const [search, setSearch] = useState<string>('');
    const [sort, setSort] = useState<string>('');
    const [category, setCategory] = useState('');

    const router = useRouter();

    return (
        <div>Filter</div>
    )
}

export default Filter