import React from "react"
import { Link } from "react-router-dom"
// import "./css/blog1.css"
import styles from "../blog/css/blog1.css"
// import Img from "../../assets/images/hinh1.png"
const Blog1 = () => {
  
	return (
		<section className="blog-post container mt-5">
      <h1>Trải Nghiệm Đặt Phòng Khách Sạn Dễ Dàng với JAPY Go Hotel</h1>
      <hr />
      <p>
        Trong thời đại số hóa hiện nay, việc đặt phòng khách sạn trực tuyến đã trở nên phổ biến hơn bao giờ hết. <b>JAPY Go Hotel</b> là một trong những nền tảng nổi bật, giúp bạn dễ dàng tìm kiếm và đặt phòng khách sạn phù hợp chỉ với vài thao tác đơn giản. Hãy cùng chúng tôi khám phá cách JAPY Go Hotel có thể mang lại trải nghiệm tuyệt vời cho người dùng.
      </p>
      <img src="https://lirp.cdn-website.com/360bb70e/dms3rep/multi/opt/0001-640w.jpg" alt="JAPY Go Hotel" />
      <h2>Các Tính Năng Chính của JAPY Go Hotel</h2>
      <ul>
        <li>
          <strong>Tìm Kiếm Khách Sạn Dễ Dàng:</strong> Với giao diện người dùng thân thiện và tính năng tìm kiếm mạnh mẽ, bạn có thể dễ dàng tìm kiếm khách sạn theo vị trí, ngày nhận phòng và các tiêu chí khác.
        </li>
        <li>
          <strong>Xem Đánh Giá và Bình Luận:</strong> Người dùng có thể xem đánh giá và bình luận từ những khách hàng trước đây, giúp bạn có được cái nhìn tổng quan về chất lượng dịch vụ của khách sạn.
        </li>
        <li>
          <strong>Đặt Phòng Nhanh Chóng:</strong> Quy trình đặt phòng được tối giản để bạn có thể hoàn tất chỉ trong vài phút.
        </li>
        <li>
          <strong>Quản Lý Đặt Phòng:</strong> Dễ dàng quản lý các đặt phòng của bạn, theo dõi trạng thái và cập nhật thông tin nếu cần thiết.
        </li>
        <li>
          <strong>Tìm quán ăn gần khách sạn:</strong> Đề xuất quán ăn phù hợp với nhu cầu của khách hàng (gần, đánh giá tốt, giá cả,...).
        </li>
      </ul>
      <Link to={"/"}><h6>Tìm hiểu trang web của chúng tôi tại đây.</h6></Link>
        </section>
	)
}

export default Blog1