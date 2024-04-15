import { useState } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Filterbar from "./Components/Filterbar";
import { Routes, Route } from "react-router-dom";
import MausamPredictor from "./pages/MausamPredictor";
import ContactUS from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import Features from "./pages/Features";
import FAQs from "./pages/FAQs";
import TodayForcast from "./Components/Forecast/TodayForcast";
import SevenDayForcast from "./Components/Forecast/SevenDayForcast";
import HourlyForcast from "./Components/Forecast/HourlyForcast";

function App() {
  return (
    <>
      
        <Navbar />
        <Filterbar />
        <Routes>
          <Route path="/" element={<MausamPredictor />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/weather-card" element={<WeatherCard />} />
          <Route path="/features-page" element={<Features />} />
          <Route path="/faqs-page" element={<FAQs />} />
          <Route path="/today-forcast" element={<TodayForcast/>} />
          <Route path="/seven-day-forcast"  element={<SevenDayForcast/>} />
          <Route path="/hourly-forcast" element={<HourlyForcast/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />

    </>
  );
}

export default App;
