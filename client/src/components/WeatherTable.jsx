import React from 'react';
import './WeatherTable.css';

const WeatherTable = ({ weatherData, activitySuggestions }) => {
    const weatherDescriptionMap = {
        "clear sky": "Trời quang",
        "few clouds": "Một vài mây",
        "scattered clouds": "Mây rải rác",
        "broken clouds": "Mây đứt đoạn",
        "overcast clouds": "Mây u ám",
        "light rain": "Mưa nhẹ",
        "moderate rain": "Mưa vừa",
        "heavy intensity rain": "Mưa to",
        "very heavy rain": "Mưa rất to",
        "extreme rain": "Mưa cực kỳ to",
        "freezing rain": "Mưa đóng băng",
        "light intensity shower rain": "Mưa rào nhẹ",
        "shower rain": "Mưa rào",
        "heavy intensity shower rain": "Mưa rào to",
        "ragged shower rain": "Mưa rào giật mạnh",
        "light snow": "Tuyết nhẹ",
        "Snow": "Tuyết",
        "Heavy snow": "Tuyết dày",
        "Sleet": "Mưa tuyết",
        "Light shower sleet": "Mưa tuyết nhẹ",
        "Shower sleet": "Mưa tuyết rào",
        "Light rain and snow": "Mưa và tuyết nhẹ",
        "Rain and snow": "Mưa và tuyết",
        "Light shower snow": "Mưa tuyết rào nhẹ",
        "Shower snow": "Mưa tuyết rào",
        "Heavy shower snow": "Mưa tuyết rào dày",
        "mist": "Sương mù",
        "Smoke": "Khói",
        "Haze": "Sương mù",
        "sand/ dust whirls": "Cát/ bụi xoáy",
        "fog": "Sương mù",
        "sand": "Cát",
        "dust": "Bụi",
        "volcanic ash": "Tro núi lửa",
        "squalls": "Gió giật",
        "tornado": "Lốc xoáy",
        "thunderstorm with light rain": "Dông kèm mưa nhẹ",
        "thunderstorm with rain": "Dông kèm mưa",
        "thunderstorm with heavy rain": "Dông kèm mưa to",
        "light thunderstorm": "Dông nhẹ",
        "thunderstorm": "Dông",
        "heavy thunderstorm": "Dông to",
        "ragged thunderstorm": "Dông giật mạnh",
        "thunderstorm with light drizzle": "Dông kèm mưa phùn nhẹ",
        "thunderstorm with drizzle": "Dông kèm mưa phùn",
        "thunderstorm with heavy drizzle": "Dông kèm mưa phùn to"
    };

    function createActivityLinks(activity) {
        const linkMap = {
            'bãi trước': 'http://localhost:5173/baitruoc',
            'Tượng Chúa Kitô Vua': 'http://localhost:5173/chuakito',
            'Hải đăng Vũng Tàu': 'http://localhost:5173/haidang',
            'chợ Xóm Lưới': 'http://localhost:5173/choxomluoi',
            'Soho Coffee': 'http://localhost:5173/soho',
            'Bạch Dinh': 'http://localhost:5173/bachdinh',
            'Tắm biển': 'http://localhost:5173/baitruoc',
            'Gành Hào': 'http://localhost:5173/ganhhao',
            'Ốc thiên nhiên': 'http://localhost:5173/octhiennhien',
            'Lotte Mart': 'http://localhost:5173/lotte',
            'spa': 'http://localhost:5173/spa',
            'lặn ngắm san hô': 'http://localhost:5173/lanngam'
        };

        let activityWithLinks = activity;
        for (const [key, value] of Object.entries(linkMap)) {
            const regex = new RegExp(key, 'g');
            activityWithLinks = activityWithLinks.replace(regex, `<a href="${value}" target="_blank">${key}</a>`);
        }

        return activityWithLinks;
    }

    function isTimeInRange(time) {
        const hours = time.getHours();
        return hours >= 7 && hours <= 22; // Lọc từ 7h sáng đến 10h tối
    }

    return (
        <div className="weather-table-container">
            <h2>Kết quả</h2>
            <br />
            <table className="weather-table">
                <thead>
                    <tr>
                        <th>Thời gian</th>
                        <th>Thời tiết</th>
                        <th>Nhiệt độ (°C)</th>
                        <th>Gợi ý hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData.filter(item => {
                        const itemDate = new Date(item.dt * 1000);
                        return isTimeInRange(itemDate);
                    }).map((item, index) => {
                        const itemDate = new Date(item.dt * 1000);
                        const hours = itemDate.getHours();
                        const minutes = itemDate.getMinutes();
                        const ampm = hours >= 12 ? 'CH' : 'SA'; // Sáng: SA, Chiều: CH
                        const formattedHours = hours % 12 || 12;
                        const formattedTime = `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
                        const temp = item.main.temp;

                        const activitySuggestion = activitySuggestions[temp] || 'Không có gợi ý';
                        const activityWithLinks = createActivityLinks(activitySuggestion);

                        return (
                            <tr key={index}>
                                <td>{formattedTime}</td>
                                <td>
                                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
                                    {weatherDescriptionMap[item.weather[0].description] || item.weather[0].description}
                                </td>
                                <td>{temp.toFixed(2)}</td>
                                <td dangerouslySetInnerHTML={{ __html: activityWithLinks }}></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default WeatherTable;
