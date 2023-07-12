import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import osm from './osm-providers';
import L from 'leaflet';

const center: [number, number] = [-34.083, 18.488];
const position: [number, number] = [-34.0835, 18.48778];
const markerIcon = new L.Icon({
  iconUrl: require('./images/marker.png'),
  iconSize: [22, 35],
});

export const LeafletMap: React.FC = () => {
  return (
    <MapContainer
      center={center}
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
      <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
      <Marker position={position} icon={markerIcon}>
        <Popup>Vrygrond Community Center</Popup>
      </Marker>
    </MapContainer>
  );
};