import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./Map.css";

function Map({ lat, lng }) {
  const position = [lat, lng];

  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={true}
    className="mapContainer">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>

  );
}

export default Map;
