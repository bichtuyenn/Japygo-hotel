import React from "react"
import { Link } from "react-router-dom"
// import styles "./css/blog.css"
import styles from "../blog/css/blog.css"
const Blog = () => {
	return (
		<section className="container mt-5, blog">
			<h1 className="container mt-5">Welcome to JAPY Go Hotel Blog</h1>
			<hr />
			<ul>
				<li>
					<Link to={"/blog-1"}><h3>Bài Blog: Giới thiệu về trang web JAPY Go Hotel</h3></Link> 
				</li>
				<li>
					<Link to={"/blog-2"}><h3>Bài Blog: Cùng JAPY Go Hotel khám phá những địa điểm du lịch hấp dẫn tại Việt Nam</h3></Link>
				</li>
				<li>
					<Link to={"/blog-3"}><h3>Bài Blog: Khám phá trải nghiệm đặt phòng tuyệt vời cùng JAPY Go Hotel</h3></Link>
				</li>
			</ul>
			
			
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
