import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LeafletMap } from './components/Leaflet';
import { ButtonAppBar } from './components/NavBar';

export default function App() {
  return (
    <Container maxWidth="xl">
      <ButtonAppBar />
      <Box justifyContent="flex-end" sx={{ border: 1, borderColor: 'primary.main' }}>
        <LeafletMap />
      </Box>
    </Container>
  );
}
