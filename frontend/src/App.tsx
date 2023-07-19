import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LeafletMap } from './components/Leaflet';
import { ButtonAppBar } from './components/NavBar';


export default function App() {
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
      <ButtonAppBar />
      <Box justifyContent='flex-end' sx={{ border: 1, borderColor: 'black' }}>
        <LeafletMap />
      </Box>
    </Container>
  );
}
