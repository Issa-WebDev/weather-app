import React, { useEffect, useRef } from "react";
import L from "leaflet";

const WeatherMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      L.marker([51.5, -0.09])
        .addTo(mapRef.current)
        .bindPopup("Ceci est un marqueur.")
        .openPopup();
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default WeatherMap;
