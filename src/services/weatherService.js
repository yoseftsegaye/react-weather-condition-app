import { DateTime } from "luxon";

const API_KEY = '7b6a83a3b4e28361b0901310d8078e30'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const weatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error('City not found');
            }
            return res.json();
        });
};

const formatCurrentWeather = (data) => {
    console.log(data)
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        timezone,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data;

    const { main: details, icon } = weather[0]

    return {
        lat, lon, temp, feels_like, temp_min, temp_max, humidity,
        name, dt, timezone, country, sunrise, sunset, details, icon, speed
    };
};

const getFormattedWeatherData = async (searchParams) => {
    try {
        const formattedCurrentWeather = await weatherData(
            'weather', searchParams).then(formatCurrentWeather)

        return formattedCurrentWeather;
    } catch (error) {
        alert(error.message); // Display alert when city is not found
    }
};

const formatToLocalTime = (
    secs,
    timezone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
    let zone;
    if (typeof timezone === 'number') {
        const offsetInHours = timezone / 3600;
        zone = `UTC${offsetInHours >= 0 ? '+' : ''}${offsetInHours}`;
    } else {
        zone = timezone
    }
    return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

export default getFormattedWeatherData;
export { formatToLocalTime };
