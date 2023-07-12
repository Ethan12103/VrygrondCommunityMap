import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LeafletMap } from './components/Leaflet';
import { MuiDrawer } from './components/MuiDrawer';

export default function App() {
  return (
    <Container maxWidth="xl">
      <MuiDrawer />
      <Box justifyContent="flex-end">
        <LeafletMap />
      </Box>
    </Container>
  );
}
