import React, { useState, useEffect } from 'react';
import './DateInput.css';

const DateInput = ({ onSearch }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        const maxDate = new Date(today);
        maxDate.setDate(maxDate.getDate() + 4);
        const maxDateStr = maxDate.toISOString().split('T')[0];

        setMinDate(todayStr);
        setMaxDate(maxDateStr);
    }, []);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleSearchClick = () => {
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.classList.toggle('footer-hidden');
            console.log('Footer toggled:', footer.classList.contains('footer-hidden'));
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                onSearch(selectedDate, latitude, longitude);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div className='main-content'>
            <section className='date-input-section'>
                <div className="date-input-container">
                    <h2>Nhập ngày bạn đến khách sạn (trong 5 ngày - kể từ ngày hôm nay)</h2>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        min={minDate}
                        max={maxDate}
                        className="form-control"
                    />
                    <p className="note">
                        <b>Ghi chú: </b>Những hoạt động và dịch vụ xung quanh khách sạn của chúng tôi sẽ được gợi ý tùy theo thời tiết của ngày bạn muốn đến
                    </p>
                    <button onClick={handleSearchClick} className="btn btn-primary search-btn">
                        Search
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DateInput;
