import BreadCrumb from '@/components/breadcrumb/bread-crumb'
import React from 'react'

const Page = () => {
    return (
        <div>
            <BreadCrumb router={`Blog`} />

            <div>
                Blog
            </div>
        </div>
    )
}

export default Page