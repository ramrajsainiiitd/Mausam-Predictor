import React, {useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/MyContext";

export default function Navbar() {
  const[weatherDetails, setWeatherDetails] = useContext(MyContext);
  const [Search, setSearch] = useState("Jaipur");
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=2e9766599faf507668c5d6611110059e`
      );
      setWeatherDetails(response.data);
      navigate("/");
    } catch (error) {
      navigate('*')
    }

  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mausam Predictor
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about-us">
                  About Us
                </Link>
              </li>
            </ul>
            <form
              style={{ marginLeft: "20px" }}
              className="d-flex"
              role="search"
              onSubmit={(e) => handleClick(e)}
            >
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search for a City"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
