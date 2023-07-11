import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import ProTip from './ProTip';
import { ToggleButtonMenu } from './components/Sidebar';
import { LeafletMap } from './components/Leaflet';
import { MuiDrawer } from './components/MuiDrawer';
import ResultPanel from './components/ResultPanel';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/bballardUF/BAP">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <MuiDrawer />
      <Box sx={{ my: 4 }} justifyContent="flex-end">
        <LeafletMap />
        <ProTip />
        <ResultPanel />
        <Copyright />
      </Box>
    </Container>
  );
}
