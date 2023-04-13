import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";


const MapRouting = (props) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    console.log(props.latDepart)
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(props.latDepart, props.lngDepart), L.latLng(props.latArrivee, props.lngArrivee)],
      draggableWaypoints: false
    }).addTo(map);
    return () => map.removeControl(routingControl);
  }, [map]);


  return null;
};
export default MapRouting;