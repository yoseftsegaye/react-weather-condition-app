import './App.css';
import SampleCities from './components/SampleCities';
import SearchInput from './components/SearchInput';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [city, setCity] = useState({ q: "berlin" });
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

  const formatBackground = () => {
    if (!weather)
      return "from-cyan-700 to-blue-700";
    else if (weather.details == "Clouds")
      return "from-white-700 to-black-700";
  }

  return (
    <div className="App">
      <div className={`mx-auto max-w-screen-md mt-5 py-5 px-10 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit 
      shadow-xl shadow-grey-400`}>
        <SampleCities setCity={setCity} />
        <SearchInput setCity={setCity} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <Details weather={weather} />
            {/* <DailyForcast title='daily forcast' /> */}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
