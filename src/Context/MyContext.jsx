import React, { createContext, useState } from "react";

export const MyContext = createContext(null);

const jaipur = {
  coord: { lon: 75.8167, lat: 26.9167 },
  weather: [{ id: 721, main: "Haze", description: "haze", icon: "50d" }],
  base: "stations",
  main: {
    temp: 307.77,
    feels_like: 306.14,
    temp_min: 307.77,
    temp_max: 307.77,
    pressure: 1012,
    humidity: 23,
  },
  visibility: 5000,
  wind: { speed: 2.06, deg: 180 },
  clouds: { all: 40 },
  dt: 1712908099,
  sys: {
    type: 1,
    id: 9170,
    country: "IN",
    sunrise: 1712882131,
    sunset: 1712927940,
  },
  timezone: 19800,
  id: 1269515,
  name: "Jaipur",
  cod: 200,
};

export const ContextProvider = (props) => {
  const [weatherDetails, setWeatherDetails] = useState(jaipur);
  return (
    <MyContext.Provider value={[weatherDetails, setWeatherDetails]}>
      {props.children}
    </MyContext.Provider>
  );
};
