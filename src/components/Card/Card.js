import React from "react";
import "./Card.css";
import { DateTime } from 'luxon';


export default function Card({ ipAddress, city, flag, country }) {
  const localDateTime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
  console.log(localDateTime);

  return (
    <div className="card">
    <div>
    <img className="flag" src={flag} alt="Country Flag"/>
    </div>
    <h3>Your IP address is: {ipAddress}</h3>
          <p>You are located in {city}, {country}</p>
          <hr/>
          <p className="date">{localDateTime}</p>

    </div>
  )
}
