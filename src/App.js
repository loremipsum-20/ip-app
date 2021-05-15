//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import  Card from './components/Card/Card.js'
import Map from "./components/Map/Map.js";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [countryCode, setCountryCode] = useState ("");
  const [country, setCountry] = useState ("");
  const [city, setCity] = useState ("");
  const [flag, setFlag] = useState ("");

useEffect(() => {
  const getIP = async () => {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPFY_API_KEY}`);
  if(response.ok)
  {
    const jsonResponse = await response.json();
    setIpAddress(jsonResponse.ip);
    setLat(jsonResponse.location.lat);
    setLng(jsonResponse.location.lng);
    setCountryCode(jsonResponse.location.country);
    setCity(jsonResponse.location.city);
    console.log(jsonResponse);
    setIsLoading(false);
    return;
  }
    }
    catch (error){
    console.log(error);
    }
  }
  getIP();
}, []);

useEffect(() => {
  const getInfo = async () => {
    try {
      if(countryCode === "") return;
      console.log(countryCode);
      const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
        if(response.ok)
        {
          const jsonResponse = await response.json();
          console.log(jsonResponse)
          setCountry(jsonResponse.name)
          setFlag(jsonResponse.flag)
          return;
        }
    }
    catch (error){
      console.log(error);
    }
  }
  getInfo();
},[countryCode]);


  return (
    <div className="App">
      <header className="App-header">
        <h1><i className="fa fa-map-marker"></i>
          What is my IP?
        </h1>
      </header>
      <main>
      {isLoading ? (
        <div>
        <p>Loading IP address...</p>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      ) : (
        <div>
        <Map lat={lat} lng={lng} />
        <Card ipAddress={ipAddress} city={city} flag={flag} country={country} />
        </div>
      )
      }
      </main>
      <footer>
        <p>© 2021</p>
      </footer>
    </div>
  );
}

export default App;
