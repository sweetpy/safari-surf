import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  { position: [-6.8, 39.28], name: 'Dar es Salaam' },
  { position: [-3.3869, 36.683], name: 'Arusha' },
  { position: [-6.1700, 35.739], name: 'Dodoma' },
  { position: [-6.1659, 39.2026], name: 'Zanzibar' }
];

const CoverageMap = () => (
  <MapContainer center={[-6.4, 35.3]} zoom={6} style={{ height: '400px', width: '100%' }}>
    <TileLayer
      attribution="&copy; OpenStreetMap contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {locations.map((loc) => (
      <Marker key={loc.name} position={loc.position}>
        <Popup>{loc.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default CoverageMap;
