import BreadCrumb from '@/components/breadcrumb/bread-crumb';
import React from 'react';

const Page = () => {
    return (
        <div>
            <BreadCrumb router={`about-us`} name='Về chúng tôi' />

            <div className='container'>
                <div className='flex flex-col p-5' >
                    <div className='flex justify-center items-center'>
                        <h1 className='text-3xl font-bold'>Về chúng tôi</h1>
                    </div>
                </div>

                <div className='flex flex-col p-5 gap-3'>
                    <div>
                        <span className='font-bold'>Tài khoản: </span>
                        <span className='uppercase '>Nguyễn Thị Hải Yến</span>
                    </div>
                    <div>
                        <span className='font-bold'>Ngân hàng: </span>
                        <span>Viettinbank</span>
                    </div>
                    <div>
                        <span className='font-bold'>Chi nhánh: </span>
                        <span>Đồng Nai</span>
                    </div>
                    <div>
                        <span className='font-bold'>Lưu ý: </span>
                        <span className='text-justify'>Chúng tôi sẽ không chịu trách nhiệm về sai sót trong quá trình chuyển khoản hoặc chuyển khoản sai thông tin. Quý khách phải làm việc trực tiếp với ngân hàng để giải quyết sai sót trên.</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;
