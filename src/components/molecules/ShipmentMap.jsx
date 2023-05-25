import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import {} from "leaflet-routing-machine";
import "lrm-graphhopper";
import "leaflet/dist/leaflet.css";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function ShipmentMap({ citiesToMap }) {
  // const map = useMap()
  // useState

  // useEffect(() => {
  //   if(!citiesToMap.includes(null)) {

  //   }
  // }, [citiesToMap])
  

  const [center, setCenter] = useState(
    citiesToMap[1]
      ? { lat: citiesToMap[1].latitude, lng: citiesToMap[1].longitude }
      : { lat: 12.97194, lng: 77.59369 }
  );

  function RouteComponent() {
    const map = useMap();
    useEffect(() => {
      console.log(citiesToMap);
      if (citiesToMap && citiesToMap.length && !citiesToMap.includes(null)) {
        const route = L.Routing.control({
          waypoints: [
            L.latLng(citiesToMap[0].latitude, citiesToMap[0].longitude),
            L.latLng(citiesToMap[1].latitude, citiesToMap[1].longitude),
            L.latLng(citiesToMap[2].latitude, citiesToMap[2].longitude),
          ],
          router: L.Routing.graphHopper(import.meta.env.VITE_GRAPHHOPPER_API),
          routeWhileDragging: false,
          itineraryClassName:
            "bg-background-secondary max-w-[25vw] hidden md:block text-start grid grid-col-2",
        }).addTo(map);
        route.hide();
      }
    }, [citiesToMap]);
    return null;
  }

  const ZOOM = 6;

  return (
    <div>
      <MapContainer
        center={center}
        zoom={ZOOM}
        className="w-[80vw] h-[70vh] m-10 rounded-lg"
        id="map"
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        <RouteComponent />
      </MapContainer>
    </div>
  );
}
