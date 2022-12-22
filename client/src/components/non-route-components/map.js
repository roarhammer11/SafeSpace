import React from "react";
import {GoogleMap} from "@react-google-maps/api";
import {useLoadScript} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
};
const center = {
  lat: 10.315699,
  lng: 123.885437,
};

export default function GoogleMaps() {
  const {isLoaded, loadError} = useLoadScript({
    // Uncomment the line below and add your API key
    googleMapsApiKey: "AIzaSyCWTIlluowDL-X4HbYQt3aDw_oi2JP0Krc",
  });

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
    />
  );
}
