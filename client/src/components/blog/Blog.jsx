import React from "react"
import { Link } from "react-router-dom"
// import styles "./css/blog.css"
import styles from "../blog/css/blog.css"
import { Container, Row, Col, Card } from "react-bootstrap"
const Blog = () => {
	return (
		<section className="container mt-5 ">
			<div className="blog">
				<h1>Welcome to JAPY Go Hotel Blog</h1>
				<hr />
				<Row xs={1} md={2} lg={3} className="g-4 mt-2">
					<Link to={"/blog-1"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://lirp.cdn-website.com/360bb70e/dms3rep/multi/opt/0001-640w.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }}
								/>
								<Card.Body>
									<Card.Title className="hotel-color">
										Giới thiệu về trang web JAPY Go Hotel
										<br></br>
									</Card.Title>
									<Card.Text>"Trải Nghiệm Đặt Phòng Khách Sạn Dễ Dàng với JAPY Go Hotel..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/buffet"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://lotushotel.vn/wp-content/uploads/2021/01/thuc-don-buffet-sang-cho-du-khach-tai-khach-san-tao-khong-gian-giao-luu-thoai-mai.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }}
								/>
								<Card.Body>
									<Card.Title className="hotel-color">
									Trải Nghiệm Buffet Ăn Sáng Tuyệt Vời 
										<br></br>
									</Card.Title>
									<Card.Text>"Trải Nghiệm Buffet Ăn Sáng Tuyệt Vời tại JAPY Go Hotel..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/blog-2"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1440/https://viashotels.com/wp-content/uploads/2022/05/Rectangle-2772.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Cùng JAPY Go Hotel khám phá những địa điểm du lịch hấp dẫn tại Việt Nam
										<br></br>
									</Card.Title>
									<Card.Text>"Việt Nam, với vẻ đẹp thiên nhiên hùng vĩ và..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/blog-3"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/43/03/1e/corvin-hotel.jpg?w=1200&h=-1&s=1"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Khám phá trải nghiệm đặt phòng tuyệt vời cùng JAPY Go Hotel
										<br></br>
									</Card.Title>
									<Card.Text>"Tại sao chọn JAPY Go Hotel?..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/baitruoc"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://ik.imagekit.io/tvlk/blog/2023/09/bai-truoc-20.jpg?tr=dpr-2,w-675"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Khám phá Bãi Trước Vũng Tàu
										<br></br>
									</Card.Title>
									<Card.Text>"Với các tín đồ say mê du lịch biển thì chắc chắn không ai là..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/chuakito"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://ik.imagekit.io/tvlk/blog/2023/01/tuong-dai-chua-kito-vua-1.jpg?tr=dpr-2,w-675"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Tất tần tật về tượng đài Chúa Kitô Vua Vũng Tàu
										<br></br>
									</Card.Title>
									<Card.Text>"Đến với tượng Chúa Kitô Vua, du khách..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/haidang"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://ik.imagekit.io/tvlk/blog/2023/09/ngon-hai-dang-vung-tau-2.jpg?tr=dpr-2,w-675"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Ngọn hải đăng Vũng Tàu - Tọa độ ngắm cảnh biển đẹp mê ly
										<br></br>
									</Card.Title>
									<Card.Text>"Ngọn hải đăng Vũng Tàu là địa điểm..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/choxomluoi"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://thodiavungtau.com/wp-content/uploads/2022/04/hai-san-cho-xom-luoi-vung-tau-1.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Chợ Xóm Lưới Vũng Tàu - Thiên đường hải sản
										<br></br>
									</Card.Title>
									<Card.Text>"Chợ Xóm Lưới Vũng Tàu được mệnh danh là thiên..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/soho"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://media2.gody.vn/public/images/destination/1/77/soho-coffee-vung-tau/pl61b1722487fd5-1639019044.jpeg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Soho Coffee - Vũng Tàu
										<br></br>
									</Card.Title>
									<Card.Text>"Soho Coffee Vũng Tàu là cái tên được nhắc đến nhiều nhất..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/bachdinh"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://ik.imagekit.io/tvlk/blog/2023/09/bach-dinh-1.jpg?tr=dpr-1,w-675"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Bạch Dinh Vũng Tàu - Biệt thự cổ kiểu Pháp
										<br></br>
									</Card.Title>
									<Card.Text>"Là một công trình kiến trúc đầu đời nằm lặng..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/homay"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-ho-may-6-1024x576.jpg?tr=dpr-2,w-675"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Khám phá khu du lịch Hồ Mây
										<br></br>
									</Card.Title>
									<Card.Text>"Khu du lịch Hồ Mây được đánh giá là khu du lịch quy mô bậc..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/lanngam"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://mia.vn/media/uploads/blog-du-lich/cung-miavn-bo-tui-kinh-nghiem-lan-bien-ngam-san-ho-vung-tau-05-1635866237.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Lặn biển ngắm san hô Vũng Tàu
										<br></br>
									</Card.Title>
									<Card.Text>"Lặn biển ngắm san hô là một trải nghiệm không thể bỏ..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/ganhhao"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://d3tosvr3yotk6r.cloudfront.net/Content/UserUploads/Images/Locations/4/2237/medium_272795172_461456538777600_736825137118401025_n.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Gành Hào - Vũng Tàu
										<br></br>
									</Card.Title>
									<Card.Text>"Nhắc đến Vũng Tàu, đây không chỉ là địa điểm với rất nhiều cảnh đẹp, mà còn sở..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/octhiennhien"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://media-cdn.tripadvisor.com/media/photo-s/19/0d/2e/07/photo0jpg.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Ốc thiên nhiên - Vũng Tàu
										<br></br>
									</Card.Title>
									<Card.Text>"Ốc Thiên Nhiên được biết đến là quán chuyên bán các món hải sản, đặc biệt là..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/lotte"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://images.foody.vn/res/g27/268194/prof/s/foody-mobile-4-jpg-250-636078008046498822.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Khám Phá Lotte Mart Vũng Tàu
										<br></br>
									</Card.Title>
									<Card.Text>"Lotte Mart Vũng Tàu không chỉ là một trung tâm mua sắm..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
					<Link to={"/spa"}>
						<Col>
							<Card>
								<Card.Img
									variant="top"
									src="https://cdn.vn.alongwalk.info/vn/wp-content/uploads/2023/02/22033427/image-review-khach-san-imperial-vung-tau-phong-cach-nhu-cung-dien-167698646787727.jpg"
									alt="Room Photo"
									className="w-100"
									style={{ height: "200px" }} />
								<Card.Body>
									<Card.Title className="hotel-color">
										Thư Giãn và Làm Đẹp tại Spa Imperial Vũng Tàu
										<br></br>
									</Card.Title>
									<Card.Text>"Nằm trong lòng khách sạn 5 sao sang..."</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Link>
				</Row>

			</div>



		</section>
	)
}

export default Blog


// const Blog = () => {
// 	return (
// 		<>
//         <div>
//             hello
//         </div>
//         </>
// 	)
// }

// export default Blog
