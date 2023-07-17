import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { MuiDrawer } from './MuiDrawer';
import HelpPage from './HelpPage';
import ProblemForm from './ProblemPage';

export const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ color: 'white', backgroundColor: 'black' }}>
        <Toolbar>
          <MuiDrawer />
          <HelpPage />
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textAlign: "center",
            fontFamily: 'San Francisco, Arial ',
            fontSize: '20px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            lineHeight: 1.5,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'white',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Vrygrond Trust Community Map
          </Typography>
          <ProblemForm/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}