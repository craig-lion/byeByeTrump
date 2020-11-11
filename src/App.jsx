import "./App.css";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React, { useState } from "react";
import axios from 'axios'

const accessToken =
  "pk.eyJ1IjoiY3JhaWctbGlvbiIsImEiOiJja2hjMnZpYWowMWh2MnBvNWh3dGF3bzl0In0.AAjLlRZD1j7qH-nqWZ-3kg";

const Map = ReactMapboxGl({ accessToken });
const MapboxClient = require("mapbox");
const client = new MapboxClient(accessToken);
const totalCities = 26562


const App = () => {
  const lngLat = [-77.016389, 38.904722];
  const [center, setCenter] = useState(lngLat);
  // const getlngLat = (location) => {
  //   client
  //     .geocodeForward(location)
  //     .then((res) => setCenter(res.entity.features[0].center));
  // };
  const pickRandomCity = () => {
    const index = Math.floor(Math.random() * totalCities + 1);
    console.log('leclique', index)
    axios
      .get("/getCity", {
        params: {
          index,
        },
      })
      .then((res) => setCenter([res.data.lng, res.data.lat]))
      .catch((err) => console.log(err));
  };

  // const onClick = () => {
  //   // alert("osnap");
  //   getlngLat("Paris, France");
  // };

  return (
    <div className="App">
      <button onClick={pickRandomCity}>
        If I lose I'll Be So Embarassed I May Have To Leave the Country
      </button>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
        center={center}
        zoom={[7]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
      ;
    </div>
  );
};

export default App;
