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

  return (
    <div className="App">
      <div className='mx-auto w-[80%] md:w-[80%] lg:w-[60%] mt-5 mb-5 py-5 px-10 bg-gradient-to-br from-cyan-700 to-blue-700 h-[100%] 
      shadow-xl shadow-grey-400'>
        <SampleCities setCity={setCity} />
        <SearchInput setCity={setCity} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <Details weather={weather} />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
