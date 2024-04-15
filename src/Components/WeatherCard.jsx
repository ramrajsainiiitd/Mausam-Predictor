import { useContext } from 'react';
import { MyContext } from '../Context/MyContext';

function TempKelToDegree(temp) {
  return ((temp-273.15).toFixed(2))
}
const WeatherCard = () => {
  const[weatherDetails] = useContext(MyContext);
  console.log( typeof weatherDetails);
  console.log(weatherDetails)
  if (1 < 3) {
    return (
      <>
        <div className='container bg-secondary p-3'
        >
          <div>
            <h3 className='display-5 text-light mx-4 text-center' >{weatherDetails.name} {weatherDetails.sys.country} </h3>
          </div>
          <div>
            <div>
              <p className='display-4 text-light'>{TempKelToDegree(weatherDetails.main.temp)} <sup>0</sup>C </p>
              <p className='display-6' >Pressure is {weatherDetails.main.pressure}</p>
              <p>Humidity is {weatherDetails.main.humidity}</p>
              <p>{weatherDetails.weather[0].main}</p>
              <span>
                <p>Min temp: {TempKelToDegree(weatherDetails.main.temp_min)} <sup>0</sup>C </p> 
                <p>Max temp: {TempKelToDegree(weatherDetails.main.temp_max)} <sup>0</sup>C </p>
              </span>
              <p>{weatherDetails.wind.speed} km/h</p>
            </div>
            <div></div>
          </div>
        </div>
      </>
    );
  } else {
    return <>Search the City</>;
  }
};

export default WeatherCard;
