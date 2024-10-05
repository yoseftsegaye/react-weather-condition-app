const API_KEY = '7b6a83a3b4e28361b0901310d8078e30'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const weatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
        .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, icon } = weather[0]

    return {
        lat, lon, temp, feels_like, temp_min, temp_max, humidity,
        name, dt, country, sunrise, sunset, details, icon, speed
    }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await weatherData(
        'weather', searchParams).then(formatCurrentWeather)

    return formattedCurrentWeather

};

export default getFormattedWeatherData
