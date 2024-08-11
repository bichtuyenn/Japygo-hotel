import React from "react";
import { Link } from "react-router-dom";
import './Admin.css'
const Admin = () => {
	return (
		<div className="container mt-5" style={{ height: "57vh" }}>
			<div className="card">
				<div className="card-header hotel-color">
					<h1>Welcome to Admin Panel</h1>
				</div>
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 mb-3">
							<div className="card text-center">
								<div className="card-body">
									<h4 className="card-title">Manage Rooms</h4>
									<p className="card-text">Add, edit, or remove rooms.</p>
									<Link to="/existing-rooms" className="btn-hotel btn">Go to Rooms</Link>
								</div>
							</div>
						</div>
						<div className="col-md-6 mb-3">
							<div className="card text-center">
								<div className="card-body">
									<h4 className="card-title">Manage Bookings</h4>
									<p className="card-text">View and manage bookings.</p>
									<Link to="/existing-bookings" className="btn-hotel btn">Go to Bookings</Link>
								</div>
							</div>
						</div>
						<div className="col-md-12 mb-3">
							<div className="card text-center">
								<div className="card-body">
									<h4 className="card-title">Monthly Revenue</h4>
									<p className="card-text">View Revenue</p>
									<Link to="/revenue" className="btn-hotel btn">Go to Revenue</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
