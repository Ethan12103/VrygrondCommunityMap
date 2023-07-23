import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import osm from './osm-providers';
import L from 'leaflet';

//const center: [number, number] = [-34.083, 18.488];
const markerIcon = new L.Icon({
  iconUrl: require('./images/marker.png'),
  iconSize: [22, 35],
});

type ChangeViewProps = {
  center: [number, number];
  zoom: number;
};

const ChangeView: React.FC<ChangeViewProps> = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom);
  return null;
}

interface LeafletMapProps {
  pinLocation: [number, number];
}

const LeafletMap: React.FC<LeafletMapProps> = ({ pinLocation }) => {
  return (
    <MapContainer
      center={pinLocation}
      zoom={16}
      style={{
        position: 'absolute',
        top: 67,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}
    >
      <ChangeView center={pinLocation} zoom={16} />
      <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
      <Marker position={pinLocation} icon={markerIcon}>
        <Popup>Your Search</Popup>
      </Marker>
    </MapContainer>
  );
};
export default LeafletMap;