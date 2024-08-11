import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import ExistingRooms from "./components/room/ExistingRooms"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import EditRoom from "./components/room/EditRoom"
import AddRoom from "./components/room/AddRoom"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import RoomListing from "./components/room/RoomListing"
import Admin from "./components/admin/Admin"
import Checkout from "./components/booking/Checkout"
import BookingSuccess from "./components/booking/BookingSuccess"
import Bookings from "./components/booking/Bookings"
import FindBooking from "./components/booking/FindBooking"
import Login from "./components/auth/Login"
import Registration from "./components/auth/Registration"
import Profile from "./components/auth/Profile"
import { AuthProvider } from "./components/auth/AuthProvider"
import RequireAuth from "./components/auth/RequireAuth"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Blog1 from "./components/blog/Blog1"
import Blog2 from "./components/blog/Blog2"
import Blog3 from "./components/blog/Blog3"
import Baitruoc from "./components/blog/Baitruoc"
import Chuakito from "./components/blog/Chuakito"
import Haidang from "./components/blog/Haidang"
import Choxomluoi from "./components/blog/Choxomluoi"
import Soho from "./components/blog/Soho"
import Bachdinh from "./components/blog/Bachdinh"
import Homay from "./components/blog/Homay"
import Lanngam from "./components/blog/Lanngam"
import Ganhhao from "./components/blog/Ganhhao"
import Octhiennhien from "./components/blog/Octhiennhien"
import Lotte from "./components/blog/Lotte"
import Spa from "./components/blog/Spa"
import WeatherActivitySuggestions from './components/WeatherActivitySuggestions';
import Chatbot from "./components/Chatbot"
import MonthlyRevenue from "./components/admin/MonthlyRevenue"
import Buffet from "./components/blog/Buffet";
function App() {
	return (
		<AuthProvider>
			<main>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/edit-room/:roomId" element={<EditRoom />} />
						<Route path="/existing-rooms" element={<ExistingRooms />} />
						<Route path="/add-room" element={<AddRoom />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/blog-1" element={<Blog1 />} />
						<Route path="/blog-2" element={<Blog2 />} />
						<Route path="/blog-3" element={<Blog3 />} />
						<Route path="/baitruoc" element={<Baitruoc />} />
						<Route path="/chuakito" element={<Chuakito />} />
						<Route path="/haidang" element={<Haidang />} />
						<Route path="/choxomluoi" element={<Choxomluoi />} />
						<Route path="/soho" element={<Soho />} />
						<Route path="/bachdinh" element={<Bachdinh />} />
						<Route path="/homay" element={<Homay />} />
						<Route path="/lanngam" element={<Lanngam />} />
						<Route path="/ganhhao" element={<Ganhhao />} />
						<Route path="/octhiennhien" element={<Octhiennhien />} />
						<Route path="/lotte" element={<Lotte />} />
						<Route path="/spa" element={<Spa />} />
						<Route path="/revenue" element={<MonthlyRevenue />} />
						<Route path="/buffet" element={<Buffet />} />
						<Route
							path="/book-room/:roomId"
							element={
								<RequireAuth>
									<Checkout />
								</RequireAuth>
							}
						/>
						<Route path="/browse-all-rooms" element={<RoomListing />} />

						<Route path="/admin" element={<Admin />} />
						<Route path="/booking-success" element={<BookingSuccess />} />
						<Route path="/existing-bookings" element={<Bookings />} />
						<Route path="/find-booking" element={<FindBooking />} />
						<Route path="/weather-activity-suggestions" element={<WeatherActivitySuggestions />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Registration />} />

						<Route path="/profile" element={<Profile />} />
						<Route path="/logout" element={<FindBooking />} />
					</Routes>
					<Chatbot />
					<Footer />
				</Router>
			</main>
		</AuthProvider>
	)
}

export default App
