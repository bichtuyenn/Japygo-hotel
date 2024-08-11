import { parseISO } from "date-fns";
import React, { useState, useEffect } from "react";
import { getRoomById } from "../utils/ApiFunctions";
import moment from "moment";
import "../blog/css/blog.css"
const RevenueTable = ({ bookingInfo, handleBookingCancellation }) => {
    const [filteredBookings, setFilteredBookings] = useState(bookingInfo);
    const [roomPrices, setRoomPrices] = useState({});
    const [monthlyRevenue, setMonthlyRevenue] = useState({});

    

    const fetchRoomPriceById = async (roomId) => {
        try {
            const response = await getRoomById(roomId);
            return response.roomPrice;
        } catch (error) {
            console.error(`Failed to fetch price for room ID ${roomId}`, error);
            return null;
        }
    };

    const fetchRoomPrices = async () => {
        const prices = {};
        for (const booking of bookingInfo) {
            if (!prices[booking.room.id]) {
                const price = await fetchRoomPriceById(booking.room.id);
                if (price !== null) {
                    prices[booking.room.id] = price;
                }
            }
        }
        setRoomPrices(prices);
    };

    const calculateTotalPayment = (checkInDate, checkOutDate, roomPrice) => {
        const checkIn = moment(checkInDate);
        const checkOut = moment(checkOutDate);
        const numberOfDays = checkOut.diff(checkIn, "days");
        return numberOfDays * roomPrice;
    };

    const groupBookingsByMonth = () => {
        const revenue = {};
        filteredBookings.forEach((booking) => {
            const checkInMonth = moment(booking.checkInDate).format("YYYY-MM");
            const totalPayment = calculateTotalPayment(
                booking.checkInDate,
                booking.checkOutDate,
                roomPrices[booking.room.id] || 0
            );

            if (revenue[checkInMonth]) {
                revenue[checkInMonth] += totalPayment;
            } else {
                revenue[checkInMonth] = totalPayment;
            }
        });
        setMonthlyRevenue(revenue);
    };

    useEffect(() => {
        setFilteredBookings(bookingInfo);
        fetchRoomPrices();
    }, [bookingInfo]);

    useEffect(() => {
        groupBookingsByMonth();
    }, [filteredBookings, roomPrices]);

    return (
        <section className="p-4 blog">
            <h1>Booked Rooms</h1>
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Booking ID</th>
                        <th>Room ID</th>
                        <th>Room Type</th>
                        <th>Check-In Date</th>
                        <th>Check-Out Date</th>
                        <th>Guest Name</th>
                        <th>Guest Email</th>
                        <th>Adults</th>
                        <th>Children</th>
                        <th>Total Guest</th>
                        <th>Confirmation Code</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {filteredBookings.map((booking, index) => (
                        <tr key={booking.id}>
                            <td>{index + 1}</td>
                            <td>{booking.id}</td>
                            <td>{booking.room.id}</td>
                            <td>{booking.room.roomType}</td>
                            <td>{moment(booking.checkInDate).format('YYYY-MM-DD')}</td>
                            <td>{moment(booking.checkOutDate).format('YYYY-MM-DD')}</td>
                            <td>{booking.guestName}</td>
                            <td>{booking.guestEmail}</td>
                            <td>{booking.numOfAdults}</td>
                            <td>{booking.numOfChildren}</td>
                            <td>{booking.totalNumOfGuests}</td>
                            <td>{booking.bookingConfirmationCode}</td>
                            <td>
                                {roomPrices[booking.room.id]
                                    ? `$${calculateTotalPayment(
                                          booking.checkInDate,
                                          booking.checkOutDate,
                                          roomPrices[booking.room.id]
                                      )}`
                                    : 'Loading...'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredBookings.length === 0 && <p>No booking found for the selected dates</p>}
            <h1>Monthly Revenue</h1>
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(monthlyRevenue).map((month) => (
                        <tr key={month}>
                            <td>{month}</td>
                            <td>${monthlyRevenue[month].toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default RevenueTable;
