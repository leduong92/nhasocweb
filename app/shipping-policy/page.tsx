import BreadCrumb from '@/components/breadcrumb/bread-crumb'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Nhà Sóc Store | Giao hàng",
    description: "Nhà Sóc Store chuyên cung cấp các loại hạt dinh dưỡng, Hạt Mác ca, Macca, Hạt điều, Hạnh nhân, Granola, óc chó đỏ, óc chó vàng và các sản phẩm khác từ tây nguyên.",
    alternates: {
        canonical: 'https://nhasoc.com/shipping-policy',
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
            <BreadCrumb router={`shipping-policy`} name='Chính sách giao hàng' />

            <div className='container py-5'>
                <div className='flex flex-col gap-5' >
                    <div className='flex justify-center items-center'>
                        <h1 className='text-3xl font-bold'>Chính sách giao hàng</h1>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>I. Chính sách giao hàng:</h1>

                        <ul className='flex flex-col gap-5 text-justify'>
                            <li>+ Sau khi Quý khách đặt hàng trên website, hệ thống sẽ tự động gửi một thông báo xác nhận đã đặt hàng. Chúng tôi sẽ liên hệ với Quý khách qua số điện thoại mà Quý khách đã cung cấp để xác minh thông tin đơn hàng, thông báo về chi phí vận chuyển và thời gian nhận hàng dự kiến, cung cấp các thông tin cần thiết khác. Sau khi đơn hàng được xác nhận và Quý khách đồng ý nhận hàng, thì đơn hàng mới được coi là đặt hàng thành công.</li>
                            <li>+ Chúng tôi hỗ trợ giao hàng tận nơi trên toàn quốc, đơn hàng sẽ được vận chuyển đến địa chỉ khách hàng đã cung cấp.</li>
                            <li>+ Sau quá trình xác minh thành công, đơn hàng sẽ được giao đến Quý khách</li>
                        </ul>
                        <p>
                            <strong>Các chính sách và quy định khác:</strong> Đối với các đơn hàng yêu cầu giao gấp, khách hàng vui lòng liên hệ hotline <strong>0393.850.836</strong> để được tư vấn cụ thể.
                        </p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>II. Chính sách kiểm hàng:</h1>
                        <span><strong>Lưu ý khi nhận hàng:</strong></span>
                        <ul className='flex flex-col gap-5 text-justify'>
                            <li>+ Quý khách vui lòng kiểm tra kỹ hàng hoá và so sánh với thông tin đặt hàng để nhận hàng. Sau khi giao hàng và thu tiền thành công, nếu có trường hợp khác, chúng tôi sẽ áp dụng chính sách hoàn trả sản phẩm.</li>
                            <li>+ Thời gian nhận hàng có thể trễ hơn hoặc sớm hơn so với dự kiến do một số lý do như: Không thể liên lạc với khách hàng, địa chỉ không chính xác, thời tiết xấu, thiên tai hoặc sự cố không mong muốn từ đơn vị vận chuyển. Trong trường hợp đơn vị vận chuyển gặp vấn đề, chúng tôi sẽ thông báo cho khách hàng sớm nhất.</li>
                            <li>+ Nếu đã quá thời gian dự kiến mà khách hàng chưa nhận được hàng, vui lòng phản hồi để chúng tôi có biện pháp khắc phục nhanh nhất. Trong thời gian chờ đợi hàng, nếu quý khách muốn thay đổi đơn hàng (thay đổi sản phẩm, không muốn nhận hàng nữa, v.v.), nhưng hàng chưa được giao, vui lòng liên hệ với chúng tôi có thể giải quyết với bên dịch vụ chuyển phát.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>III. Các hình thức giao hàng</h1>
                        <span>Các hình thức giao hàng bao gồm:</span>
                        <ul className='flex flex-col gap-5 text-justify'>
                            <li>+ Giao hàng tận nhà thông qua dịch vụ chuyển phát. Chúng tôi ủy thác các đơn vị vận chuyển như Viettel Post, Giao Hàng Tiết Kiệm, Giao Hàng Nhanh, v.v. Khách hàng nhận hàng và thanh toán cho nhân viên chuyển phát khi giao hàng. Thời gian giao hàng thông thường từ 1-6 ngày, phụ thuộc vào địa phương và khoảng cách địa lý. Trường hợp phát sinh chậm trễ trong việc giao hàng hoặc cung ứng dịch vụ, Chúng tôi sẽ thông tin kịp thời cho khách hàng và tạo cơ hội để khách hàng có thể hủy hợp đồng nếu muốn.</li>
                            <li>+ Giao hàng bằng xe khách: Trong những trường hợp đặc biệt như nhận hàng với số lượng lớn hoặc cần gấp, chúng tôi sử dụng hình thức gửi hàng bằng xe khách. Khách hàng sẽ liên hệ trực tiếp với nhà xe được ủy quyền bởi nhận thông tin liên hệ và nhận hàng. Trường hợp phát sinh chậm trễ trong việc giao hàng hoặc cung ứng dịch vụ, chúng tôi sẽ thông tin kịp thời cho khách hàng và tạo cơ hội để khách hàng có thể hủy hợp đồng nếu muốn.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page