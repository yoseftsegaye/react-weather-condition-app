import './App.css';
import SampleCities from './components/SampleCities';
import SearchInput from './components/SearchInput';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [city, setCity] = useState({ q: "Debre markos" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...city, units }).then(
        (data) => {
          setWeather(data);
        });
    };

    fetchWeather();
  }, [city, units]);

  const formatBackgrroundImage = () => {
    if (!weather) return `url('./clear.jpg')`
    if (weather.details.toLowerCase() === 'rain') return `url('./rain.jpg')`
    if (weather.details.toLowerCase() === 'clear') return `url('./clear.jpg')`
    if (weather.details.toLowerCase() === 'clouds') return `url('./cloud.jpg')`
    if (weather.details.toLowerCase() === 'drizzle') return `url('./drizzle.jpg')`
    if (weather.details.toLowerCase() === 'snow') return `url('./snow.jpg')`
    return `url('./default.jpg')`;
  }
  const formatBackgrroundColor = () => {
    if (!weather)
      return 'linear-gradient(to bottom right, rgba(0, 204, 204, 0.7), rgba(0, 102, 255, 0.7))'
    if (weather.details.toLowerCase() === 'rain')
      return 'linear-gradient(to bottom right, rgba(0, 204, 204, 0.7), rgba(0, 0, 0, 0.7))'
    if (weather.details.toLowerCase() === 'clear')
      return 'linear-gradient(to bottom right, rgba(255, 165, 10, 0.5), rgba(220, 0, 0, 0.7))'
    if (weather.details.toLowerCase() === 'clouds')
      return 'linear-gradient(to bottom left, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.7))'
    if (weather.details.toLowerCase() === 'drizzle')
      return 'linear-gradient(to bottom right, rgba(0, 204, 204, 0.7), rgba(0, 0, 0, 0.7))'
    if (weather.details.toLowerCase() === 'snow')
      return 'linear-gradient(to bottom left, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.7))'
    return 'linear-gradient(to bottom right, rgba(0, 204, 204, 0.7), rgba(0, 102, 255, 0.7))'
  }

  return (
    <div className="App">
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center" style={{ backgroundImage: formatBackgrroundImage() }}>
        <div className='mx-auto w-[80%] md:w-[80%] lg:w-[60%] mt-5 mb-5 py-5 px-10 rounded-lg h-[100%] shadow-xl shadow-grey-400'
          style={{ background: formatBackgrroundColor() }}>
          <SampleCities setCity={setCity} />
          <SearchInput setCity={setCity} units={units} setUnits={setUnits} />
          {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <Details weather={weather} units={units} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
