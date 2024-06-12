import React, { useState } from 'react';
import DateInput from './DateInput';
import WeatherTable from './WeatherTable';

const WeatherActivitySuggestions = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [activitySuggestions, setActivitySuggestions] = useState({});
    const [error, setError] = useState('');

    const handleSearch = async (date, latitude, longitude) => {
        const apiKey = '7e6f6feb85205711c545be979c4df5e8'; //My APIKey
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${10.344744629512377}&lon=${107.09526350740967}&units=metric&appid=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const filteredData = data.list.filter(item => {
                const itemDate = new Date(item.dt * 1000);
                return itemDate.toISOString().split('T')[0] === date;
            });
            setWeatherData(filteredData);

            // Gợi ý hoạt động dựa trên nhiệt độ
            const activitySuggestionsTemp = filteredData.reduce((acc, item) => {
                const temp = item.main.temp;
                const activity = getActivitySuggestion(temp);
                acc[temp] = activity;
                return acc;
            }, {});

            setActivitySuggestions(activitySuggestionsTemp);
            setError('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Error fetching weather data. Please try again later.');
        }
    };

    const getActivitySuggestion = (temp) => {
        if (temp >= 20 && temp <= 25) {
            return 'Đi dạo và tắm ở bãi trước, tham quan các địa điểm như Tượng Chúa Kitô Vua, Hải đăng Vũng Tàu; Khám phá chợ Xóm Lưới để thưởng thức hải sản tươi sống; Ghé thăm các quán cà phê nổi tiếng như Soho Coffee để thư giãn và ngắm cảnh';
        } else if (temp > 25 && temp <= 31) {
            return 'Thưởng thức ẩm thực biển tại các nhà hàng hải sản nổi tiếng như Gành Hào hoặc Ốc thiên nhiên; Tham quan các khu du lịch, ghé thăm Bạch Dinh hoặc Khu du lịch Hồ Mây; Tắm biển hoặc lặn ngắm san hô dưới nước';
        } else if (temp > 31 && temp <= 35) {
            return 'Thư giãn tại spa, thưởng thức các dịch vụ spa tại các khách sạn; Tham gia các hoạt động trong nhà như khám phá các bảo tàng hoặc các trung tâm mua sắm như Lotte Mart';
        } else {
            return 'Không có gợi ý';
        }
    };

    return (
        <div>
            <DateInput onSearch={handleSearch} />
            {weatherData.length > 0 && <WeatherTable weatherData={weatherData} activitySuggestions={activitySuggestions} />}
            {error && (
                <div style={{ color: 'red' }}>
                    <h2>Error:</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherActivitySuggestions;
