import React from "react";
//import { useMap } from "react-leaflet/hooks";
import {
  Marker,
  Popup,
  TileLayer,
  MapContainer,
  Polyline,
} from "react-leaflet";
import barsData from "../data/bars-locations.json";

const MapDisplay = () => {
  console.log(barsData.length);
  const randomBar = barsData[Math.floor(Math.random() * barsData.length)];
  console.log(randomBar);

  let randomBarsArray = [];
  for (let n = 0; n < 3; n++) {
    const randomBar = barsData[Math.floor(Math.random() * barsData.length)];
    randomBarsArray.push(randomBar);
  }
  const position1 = [
    [randomBarsArray[0].gps.latitude, randomBarsArray[0].gps.longitude],
    [randomBarsArray[1].gps.latitude, randomBarsArray[1].gps.longitude],
    [randomBarsArray[2].gps.latitude, randomBarsArray[2].gps.longitude],
  ];
  return (
    <div>
      <MapContainer center={[51.110699, 17.03247]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {randomBarsArray.map((bars) => (
          <Marker
            key={bars.id}
            position={[bars.gps.latitude, bars.gps.longitude]}
          >
            {" "}
            <Popup>
              This is a bar <br /> {bars.name}
            </Popup>
          </Marker>
        ))}

        <Polyline
          pathOptions={{ color: "red" }}
          positions={position1}
        ></Polyline>
        {/*// create a red polyline from an array of LatLng points
var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());*/}
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
