import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import React from 'react';

const Page = () => {
    return (
        <div>
            <BreadCrumb router={`contact-us`} name='Contact us' />

            <div>
                Contact
            </div>
        </div>
    )
};
export default Page