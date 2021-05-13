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


  return (
    <div className="App">
      <header className="App-header">
        <h1>
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
        <Map className="mapContainer" lat={lat} lng={lng} />
        <Card className="card" ipAddress={ipAddress} />
        </div>
      )
      }
      </main>
    </div>
  );
}

export default App;
