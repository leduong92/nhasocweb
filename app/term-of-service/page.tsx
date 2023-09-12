import BreadCrumb from '@/components/breadcrumb/bread-crumb'
import React from 'react'

const Page = () => {
    return (
        <div>
            <BreadCrumb router={`term-of-service`} name='Điều khoản dịch vụ' />

            <div className='container py-5'>
                <div className='flex flex-col gap-5' >
                    <div className='flex flex-col gap-5' >
                        <div className='flex justify-center items-center'>
                            <h1 className='text-3xl font-bold'>Điều khoản dịch vụ</h1>
                        </div>
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
                        <h1 className='font-bold text-2xl'>II. Chính sách thanh toán:</h1>
                        <p>Khách hàng có thể đặt hàng qua website hoặc qua hotline <strong>0393.850.836</strong>. Nhân viên của chúng tôi sẽ gọi điện xác nhận với khách hàng về sản phẩm, chi phí và phương thức vận chuyển.</p>
                        <span><strong>Khách hàng có thể chọn 1 trong 2 hình thức thanh toán sau:</strong></span>
                        <span className='underline'>Chuyển khoản:</span>
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
                        <span className='underline'>Nhận hàng thanh toán:</span>
                        <p>Thanh toán khi nhận hàng. Quý khách có trách nhiệm thanh toán đầy đủ toàn bộ giá trị đơn hàng cho nhân viên giao nhận ngay sau khi hoàn tất kiểm tra hàng hóa và nhận phiếu giao hàng cùng hàng hóa.</p>
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

                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>IV. Chính sách bảo mật thông tin:</h1>
                        <span>+ Cam kết tuyệt đối không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của người dùng khi không có sự cho phép đồng ý từ người dùng.
                        </span>
                        <span>
                            + Chúng tôi sẽ cung cấp 1 số thông tin như: tên, địa chỉ, số điện thoại cho bên dịch vụ vận chuyển khi sử dụng dịch vụ giao nhận vận chuyển.
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page