import BreadCrumb from '@/components/breadcrumb/bread-crumb'
import { Button } from '@/components/ui/button'
import Image from 'next/image.js'
import React from 'react'

const data = [
    {
        id: 1,
        title: "Creative Portfolio",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
            "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
        id: 2,
        title: "Minimal Single Product",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
            "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
        id: 3,
        title: "Strong Together Charity",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
            "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    }
]

const Page = () => {
    return (
        <div>
            <BreadCrumb router={`blog`} name='Blogs' />

            <div className='container'>
                <h1 className='capitalize font-bold text-[25px] py-2'>Our Blog</h1>

                {data.map((item) => (
                    <div key={item.id} className='flex flex-col rounded-md border shadow-sm my-3 p-5 gap-3 md:flex-row md:odd:flex-row-reverse xl:items-center'>
                        <div className='order-2 md:order-1 pr-1 xl:flex-1 flex-col items-center text-left' >
                            <h1 className='font-bold text-2xl my-3'>{item.title}</h1>
                            <p className='text-justify my-3 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left'>
                                {item.desc}
                            </p>
                            <Button className='mt-2'>See More</Button>
                        </div>
                        <div className='order-1 md:order-2 xl:flex-1'>
                            <Image
                                width={500}
                                height={500}
                                src={item.image}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page