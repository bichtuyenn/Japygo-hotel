import React, { useState } from 'react';
import DateInput from './DateInput';
import WeatherTable from './WeatherTable';

const WeatherActivitySuggestions = () => {
    const [weatherData, setWeatherData] = useState([]);

    const handleSearch = async (date, latitude, longitude) => {
        const apiKey = '7e6f6feb85205711c545be979c4df5e8'; // Sử dụng API key của bạn
        // const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        /*Kinh độ, vĩ độ của khách sạn*/
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${10.344174679066969}&lon=${107.09551026586344}&units=metric&appid=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Raw data:', data);
            const filteredData = data.list.filter(item => {
                const itemDate = new Date(item.dt * 1000);
                const itemHour = itemDate.getHours();
                console.log('Item Date:', itemDate, 'Item Hour:', itemHour); // In ra ngày và giờ của từng phần tử
                return itemDate.toISOString().split('T')[0] === date && itemHour >= 6 && itemHour <= 24;
            });
            console.log('Filtered data:', filteredData);
            setWeatherData(filteredData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div>
            <DateInput onSearch={handleSearch} />
            {weatherData.length > 0 && <WeatherTable weatherData={weatherData} />}
        </div>
    );
};

export default WeatherActivitySuggestions;
