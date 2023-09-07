import Link from 'next/link'
import React from 'react'

type Props = {
    router?: string,
    name?: string,
    id?: string
}

const BreadCrumb = ({ router, name, id }: Props) => {
    return (
        <div className='border-b'>
            <div className='container'>
                <div className="py-2 flex items-center flex-wrap">
                    <ul className="flex items-center ">
                        <li className="inline-flex items-center mr-3">
                            <Link href="/" className=" hover:text-blue-500">
                                <svg className="w-5 h-auto fill-current  text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" /></svg>
                            </Link>
                        </li>

                        <li className="inline-flex items-center">
                            <Link href="/" className=" hover:text-blue-500">
                                Home
                            </Link>

                            <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
                        </li>
                        {id
                            ? <>
                                <li className="inline-flex items-center">
                                    <Link href={`/products`} className=" hover:text-blue-500 ">
                                        {router}
                                    </Link>

                                    <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
                                </li>
                                <li className="inline-flex items-center truncate ...">
                                    <Link href={`product-detail/${id}`} className="truncate ... hover:text-blue-500  text-blue-500">
                                        {name}
                                    </Link>
                                </li>
                            </>
                            : <li className="inline-flex items-center">
                                <Link href={`/${router}`} className=" hover:text-blue-500  text-blue-500">
                                    {name}
                                </Link>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb