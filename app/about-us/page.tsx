import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import React from 'react';

const Page = () => {
    return (
        <div>
            <BreadCrumb router={`about-us`} name='About us' />

            <div>
                About
            </div>
        </div>
    )
};

export default Page;
