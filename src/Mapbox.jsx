import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom'
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiY3JhaWctbGlvbiIsImEiOiJja2hjMnZpYWowMWh2MnBvNWh3dGF3bzl0In0.AAjLlRZD1j7qH-nqWZ-3kg";

const Mapbox = () => {
  const [lngLat, setLngLat] = useState({lng:-77.016389, lat:38.904722});
  const [zoom, setZoom] = useState([8])
  const mapRef = useRef("mapContainer");
  console.log(mapRef)
  const mapContainer = () => <div ref={mapRef} />;

  useEffect(() => {
    // render the div
    ReactDOM.render(
      <mapContainer />
    );
  })

  console.log('this is document: ', document.body)

    // const Map = new mapboxgl.Map({
    //   container: "mapContainer",
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   // center: [lngLat],
    //   zoom: { zoom },
    // });

    // return Map;
  return null;

}

export default Mapbox