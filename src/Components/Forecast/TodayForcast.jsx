import React from "react";
import WeatherCard from "../WeatherCard";

export default function TodayForcast() {
  return (
    <>
    <div className="d-flex">
      <WeatherCard/>
      <div className='bg-secondary container mx-2 p-3' >
      Today forcast.
      </div>
    </div>
    </>
    
  );
}
