import React from "react"
import { Col, Container, Row, } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Footer.css"
import {
	FaHome,
	FaPhone,
	FaEnvelope

} from "react-icons/fa"
const Footer = () => {
	let today = new Date()
	return (
		<footer className="bg-dark text-light py-3 footer" style={{ marginLeft: "0", marginRight: "0" }}>

			<Container>
				<Row>
					<Col xs={12} md={4} className=" text-md-left">
						<a href="/" className="home"><h4>JAPY Go Hotel</h4></a>
						<p>Với không gian sang trọng, tiện nghi hiện đại và dịch vụ chăm sóc khách hàng tận tâm, chúng tôi cam kết mang đến cho bạn những trải nghiệm đáng nhớ và thoải mái nhất. Đặt phòng ngay hôm nay để khám phá hành trình du lịch tuyệt vời cùng JAPY Hotel Go!</p>
					</Col>
					<Col xs={12} md={4} className=" text-md-left" >
						<h4>Contact Us</h4>
						<ul className="list-unstyled">
							<li><FaEnvelope />  japygohotel@gmail.com</li>
							<li><FaPhone />  090.888.90</li>
							<li><FaHome /> Đường Quang Trung, Vũng Tàu</li>
						</ul>
					</Col>
					<Col xs={12} md={4} className=" text-md-left">
						<h4>Blog</h4>
						<ul className="list-unstyled">
							<li><a href="/blog" className="text-light">Latest Posts</a></li>
						</ul>
					</Col>

				</Row>
				<Row>
					<Col style={{ textAlign: "center" }}>
						<span className="mb-0"> &copy; {today.getFullYear()} JAPY Go Hotel</span>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
