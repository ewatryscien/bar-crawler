import React from "react";
import {
  Marker,
  Popup,
  TileLayer,
  MapContainer,
  Polyline,
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";

const MapDisplay = ({ bars, directions, currentBar }) => {
  function getPolylineColor(current, bar) {
    return current === bar ? "red" : "blue";
  }

  return (
    <div className="map-page-container">
      <MapContainer center={[51.110699, 17.03247]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {bars.map((bars) => (
          <Marker
            key={bars.id}
            position={[bars.coords.latitude, bars.coords.longitude]}
          >
            {" "}
            <Popup>{bars.name}</Popup>
          </Marker>
        ))}
        {directions.map((direction, i) => (
          <Polyline
            key={i}
            pathOptions={{ color: getPolylineColor(currentBar, i) }}
            positions={direction}
          ></Polyline>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
