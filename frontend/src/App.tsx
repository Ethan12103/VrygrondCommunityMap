import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LeafletMap from './components/Leaflet';
import { ButtonAppBar } from './components/NavBar';
import { useState, useEffect } from 'react';

const defaultLat = -34.0835;
const defaultLon = 18.48778;

export default function App() {
  const [pinLocation, setPinLocation] = useState<[number, number]>([defaultLat, defaultLon] as [number, number]);
  return (
    <Container maxWidth='xl'
      style={{
        position: 'absolute',
        paddingLeft: 0,
        paddingRight: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}>
      <ButtonAppBar setPinLocation={setPinLocation} />
      <Box justifyContent='flex-end' sx={{ border: 1, borderColor: 'black' }}>
        <LeafletMap pinLocation={pinLocation} />
      </Box>
    </Container>
  );
}
