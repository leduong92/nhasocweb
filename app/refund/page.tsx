import BreadCrumb from '@/components/breadcrumb/bread-crumb'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Nhà Sóc Store | Đổi trả",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    alternates: {
        canonical: '/redunf',
        languages: {
            'vi': '/vi'
        }
    },
    applicationName: 'Nhà Sóc Store',
    authors: [{ name: 'jame' }, { name: 'johson', url: 'https://nhasoc.com' }],
    keywords: ['Nhà Sóc, Mác Ca, Macca, Hạt điều, Granola, Hạnh nhân, dinh dưỡng'],
    colorScheme: 'light',
    creator: 'jamejohson',

    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-icon.ico'
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
};
const Page = () => {
    return (
        <div>
            <BreadCrumb router={`refund`} name='Chính sách hoàn tiền' />

            <div className='container py-5'>
                <div className='flex flex-col gap-5' >
                    <div className='flex flex-col gap-5' >
                        <div className='flex justify-center items-center'>
                            <h1 className='text-3xl font-bold'>Chính sách hoàn tiền</h1>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>III. Chính Sách Đổi Trả</h1>
                        <h1>1. Lý do chấp nhận đổi trả</h1>
                        <span>Trường hợp đổi hàng:</span>
                        <ul className='flex flex-col gap-5 text-justify'>
                            <li>+ Sản phẩm bị giao sai về số lượng, thông tin và mẫu mã so với đơn đặt hàng.</li>
                            <li>+ Sản phẩm bị hỏng do lỗi của nhà sản xuất (lỗi về dung tích,....) hoặc lỗi trong quá trình vận chuyển (bị biến dạng, nứt vỡ v.v.).</li>
                        </ul>
                        <span>Trường hợp trả hàng:</span>

                        <span>Trả hàng hoàn tiền nếu phát hiện chất lượng sản phẩm không đạt yêu cầu.</span>
                        <p className='capitalize'>SẢN PHẨM GẶP LỖI DO NHÀ SẢN XUẤT QUÝ KHÁCH VUI LÒNG THÔNG BÁO TRONG VÒNG 24H KỂ TỪ KHI NHẬN HÀNG VÀ GỬI KÈM HÌNH ẢNH/VIDEO ĐỂ ĐƯỢC ĐẢM BẢO QUYỀN LỢI MỘT CÁCH TỐT NHẤT.</p>

                        <h1>2. Điều kiện đổi trả</h1>
                        <span>Yêu cầu cho sản phẩm đổi trả:</span>
                        <ul className='flex flex-col gap-5 text-justify'>
                            <li>+ Sản phẩm còn nguyên vẹn, đầy đủ nhãn mác, nguyên đai kiện, niêm phong theo quy cách ban đầu (trừ trường hợp sản phẩm bị lỗi hoặc bị hư hại trong quá trình vận chuyển).</li>
                            <li>+ Sản phẩm/dịch vụ còn đầy đủ phụ kiện và tặng phẩm đi kèm (nếu có).</li>
                            <li>+ Sản phẩm không bị dơ bẩn, không có mùi lạ, không có dấu hiệu đã qua sử dụng.</li>
                        </ul>

                        <h1>3. Thời gian đổi trả:</h1>
                        <p>Mọi sản phẩm đều được chấp nhận yêu cầu đổi trả sản phẩm trong vòng 24h kể từ ngày nhận hàng.</p>

                        <h1>4. Chi phí đổi trả</h1>
                        <ul className='flex flex-col gap-5 text-justify'>
                            <li>+ Đối với các sản phẩm đổi lại do lỗi của đơn vị vận chuyển, khách hàng sẽ được miễn phí đổi trả và được giao hàng miễn phí.</li>
                            <li>+ Đối với các sản phẩm trả lại do khách hàng thay đổi nhu cầu sử dụng, khách hàng vui lòng thanh toán phí vận chuyển hai chiều.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page