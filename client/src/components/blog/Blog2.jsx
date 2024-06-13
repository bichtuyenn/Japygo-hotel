import React from "react"
// import "./css/blog2.css"
import styles from "../blog/css/blog2.css"
import { Link } from "react-router-dom"
// import Img from "../../assets/images/halong.webp"
// import Img1 from "../../assets/images/hoian.jpg"
// import Img2 from "../../assets/images/dalat.jpg"
// import Img3 from "../../assets/images/sapa.png"
// import Img4 from "../../assets/images/phuquoc.jpg"
const Blog2 = () => {
	return (
		<section className="container mt-5">
      <div className="blog2">
        <h1>Cùng JAPY Go Hotel khám Phá Những Địa Điểm Du Lịch Hấp Dẫn Tại Việt Nam</h1>
        <hr />
        <p>
          Việt Nam, với vẻ đẹp thiên nhiên hùng vĩ và nền văn hóa phong phú, là điểm đến lý tưởng cho những ai đam mê du lịch. <b>JAPY Go Hotel</b> sẽ cùng bạn khám phá những địa điểm du lịch nổi bật nhất tại Việt Nam qua bài viết dưới đây.
        </p>
        <h4>1. Vịnh Hạ Long</h4>
        <img src="https://image.nhandan.vn/w800/Uploaded/2024/igpcvcvjntc8510/2023_12_07/halongbay-3501.jpg.webp" alt="Vịnh Hạ Long" />
        <p>
         Vịnh Hạ Long, nằm ở tỉnh Quảng Ninh, là một trong những kỳ quan thiên nhiên thế giới với hàng nghìn hòn đảo lớn nhỏ và các hang động kỳ thú. Du khách có thể tham gia các tour du thuyền để khám phá vẻ đẹp huyền bí của vịnh, chiêm ngưỡng cảnh hoàng hôn tuyệt đẹp và thưởng thức các món hải sản tươi ngon.
        </p>
        <h4>2. Phố cổ Hội An</h4>
        <img src="https://kienviet.net/wp-content/uploads/2020/12/Picture1.png" alt="Phố cổ Hội An" />
        <p>
         Hội An, nằm ở tỉnh Quảng Nam, là một phố cổ nổi tiếng với kiến trúc cổ kính và những con phố đèn lồng lung linh. Du khách có thể tham gia các hoạt động như tham quan chùa Cầu, thưởng thức các món ăn đặc sản như cao lầu, bánh mì Hội An, và tham gia lễ hội đèn lồng vào mỗi đêm rằm.
        </p>
        <h4>3. Đà Lạt</h4>
        <img src="https://statics.vinpearl.com/da-lat-vietnam-01_1690601607.jpeg" alt="Đà Lạt" />
        <p>
          Đà Lạt, thành phố ngàn hoa, nằm trên cao nguyên Lâm Viên, là điểm đến lý tưởng cho những ai yêu thích khí hậu mát mẻ và phong cảnh lãng mạn. Du khách có thể tham quan thung lũng Tình Yêu, hồ Xuân Hương, và thử cảm giác mạo hiểm với các hoạt động như đi cáp treo, leo núi Langbiang.
        </p>
        <h4>4. Sapa</h4>
        <img src="https://vcdn1-dulich.vnecdn.net/2022/04/18/dulichSaPa-1650268886-1480-1650277620.png?w=0&h=0&q=100&dpr=2&fit=crop&s=JTUw8njZ_Glkqf1itzjObg" alt="Sapa" />
        <p>
         Sapa, nằm ở tỉnh Lào Cai, là điểm đến nổi tiếng với cảnh quan núi non hùng vĩ và nền văn hóa đa dạng của các dân tộc thiểu số. Du khách có thể tham gia trekking đến bản Cát Cát, thác Bạc, và chinh phục đỉnh Fansipan - nóc nhà Đông Dương.
        </p>
        <h4>5. Phú Quốc</h4>
        <img src="https://vcdn1-dulich.vnecdn.net/2022/04/08/du-lich-Phu-Quoc-02-5022-1649405369.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=wlhAT2o6cm94fcbOlM28Lg"alt="Phú Quốc" />
        <p>
         Phú Quốc, hòn đảo lớn nhất của Việt Nam, nổi tiếng với những bãi biển cát trắng mịn, nước biển trong xanh và hệ sinh thái đa dạng. Du khách có thể tham quan vườn quốc gia Phú Quốc, thưởng thức hải sản tươi ngon và tham gia các hoạt động như lặn ngắm san hô, câu cá.
        </p>
        <h4>6. Vũng Tàu</h4>
        <img src="https://cdn.tgdd.vn/Files/2021/06/15/1360387/diem-danh-10-dia-diem-du-lich-vung-tau-mien-phi-di-la-ghien-202106160030078705.jpg"></img>
        <p>
        Nếu hỏi cư dân Sài Gòn đâu là địa điểm du lịch quen thuộc nhất thì câu trả lời phổ biến có lẽ là thành phố biển Vũng Tàu. Chỉ cách TP.HCM chưa đến hai giờ chạy xe, du lịch Vũng Tàu từ lâu đã trở thành một địa điểm nghỉ dưỡng nổi tiếng của người dân các tỉnh thành lân cận.
        </p>
        <p>
        Với cát vàng biển xanh, cùng vô vàn món ngon hấp dẫn từ hải sản đến bánh khọt, một khách sạn ở Vũng Tàu hẳn là địa chỉ "đi trốn" không thể hoàn hảo hơn. Cho một con thèm biển bất chợt, nếu bạn chẳng muốn đi xa mệt nhọc thì sao không dừng chân nơi phố biển và thoải mái tận hưởng kì nghỉ của mình!
        </p>
        <h4>Kết Luận</h4>
        <p>
         Việt Nam là điểm đến du lịch tuyệt vời với nhiều danh lam thắng cảnh và trải nghiệm phong phú. Hãy cùng <Link to={"/"}><b>JAPY Go Hotel</b></Link> lên kế hoạch cho chuyến đi của bạn để khám phá những vẻ đẹp tiềm ẩn của đất nước hình chữ S này.
        </p>
      </div>
    </section>
	)
}

export default Blog2