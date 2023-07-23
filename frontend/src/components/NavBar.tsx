import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MuiDrawer } from './MuiDrawer';
import HelpPage from './HelpPage';
import ProblemForm from './ProblemPage';

interface ImgMediaCardProps {
  setPinLocation: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export const ButtonAppBar = ({ setPinLocation }: ImgMediaCardProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ color: 'white', backgroundColor: 'black' }}>
        <Toolbar>
          <MuiDrawer setPinLocation={setPinLocation} />
          <HelpPage />
          <Typography variant='h6' component='div' sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontFamily: '-apple-system',
            fontSize: '20px',
            fontWeight: 600,
            letterSpacing: '1px',
            lineHeight: 1.5,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'white',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Vrygrond Trust Community Map
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}