import React, { useContext, useEffect, useState } from "react"
import MainHeader from "../layout/MainHeader"
import HotelService from "../common/HotelService"
import Parallax from "../common/Parallax"
import RoomCarousel from "../common/RoomCarousel"
import RoomSearch from "../common/RoomSearch"
import { useLocation } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"
import styles from "../home/Home.css"
const Home = () => {
	const location = useLocation()
	const message = location.state && location.state.message
	const currentUser = localStorage.getItem("userId")
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		if (visible) {
			const timer = setTimeout(() => {
				setVisible(false);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [visible]);



	return (
		<section>
			{message && <p className="popup_logout">{message}</p>}
			{currentUser && (
				<h6 className={`popup ${!visible ? 'popup-hidden' : ''}`}> You are logged in successfully!</h6>
			)}
			<MainHeader />
			<div className="container">
				<RoomSearch />
				<RoomCarousel />
				<Parallax />
				<RoomCarousel />
				<HotelService />
				<Parallax />
			</div>
		</section>
	)
}

export default Home
