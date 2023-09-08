import React from 'react'

const NewsLetter = () => {
    return (
        <div className='py-3'>
            <div className="container">
                <div className='flex items-center justify-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold '>Tại sao chọn chúng tôi?</h1>
                </div>
                <div className=" flex flex-col py-4 gap-5  md:flex-row lg:flex-row xl:grid xl:grid-cols-3">
                    <div className='flex flex-col border items-center shadow-md p-5 gap-3 xl:flex-row'>
                        <div className='flex items-center justify-center h-48 w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 xl:w-24 xl:h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>
                        </div>

                        <div className='flex flex-col items-center gap-5'>
                            <h1 className='text-2xl md:text-3xl font-bold'>Đổi trả</h1>
                            <span className='flex items-center text-justify'>Đổi trả hoặc hoàn tiền nếu sản phẩm hư hoặc không đúng như mô tả hình ảnh sản phẩm đăng</span>
                        </div>
                    </div>
                    <div className='flex flex-col border items-center shadow-md p-5 gap-3 xl:flex-row'>
                        <div className='flex items-center justify-center h-48 w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 xl:w-24 xl:h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>

                        <div className='flex flex-col items-center gap-5'>
                            <h1 className='text-2xl md:text-3xl font-bold'>Giao hàng</h1>
                            <span className='flex items-center text-justify'>Giao hàng đảm bảo chất lượng ATVSTP, giao hàng nhanh và đóng gói cẩn thận chắc chắn</span>
                        </div>
                    </div>
                    <div className='flex flex-col border items-center shadow-md p-5 gap-3 xl:flex-row'>
                        <div className='flex items-center justify-center h-48 w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 xl:w-24 xl:h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                            </svg>
                        </div>

                        <div className='flex flex-col items-center gap-5'>
                            <h1 className='text-2xl md:text-3xl font-bold'>Hỗ trợ</h1>
                            <span className='flex items-center text-justify'>Chăm sóc khách hàng nhiệt tình và giải quyết các vấn đề một cách nhanh chóng nhất.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter