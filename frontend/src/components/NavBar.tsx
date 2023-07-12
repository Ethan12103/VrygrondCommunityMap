import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, IconButton} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { MuiDrawer } from './MuiDrawer';

export const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 0, marginRight: 0, paddingLeft: "0px", paddingRight: "0px"}}>
        <AppBar position="static" color="secondary">
            <Toolbar>
                <MuiDrawer />
                <IconButton size="large" edge="start" color="inherit">
                    <HelpOutlineIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center"}} >
                    Vrygrond Community Map
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  );
}