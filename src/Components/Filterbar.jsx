import React from "react";
import { Link } from "react-router-dom";

export default function Filterbar() {
  return (
    <div>
      <div className="row gap-1 d-flex p-2 bg-dark my-3 justify-content-center align-items-center">
        <Link
          className="col d-flex justify-content-center align-items-center"
          to="today-forcast"
        >
          <span className="btn bg-primary " >Today</span>
        </Link>
        <Link
          className="col d-flex justify-content-center align-items-center"
          to="hourly-forcast"
        >
          <span className="btn bg-primary" >Hourly</span>
        </Link>
        <Link
          className="col d-flex justify-content-center align-items-center"
          to="seven-day-forcast"
        >
          <span className="btn bg-primary" >7 Day</span>
        </Link>
      </div>
    </div>
  );
}
