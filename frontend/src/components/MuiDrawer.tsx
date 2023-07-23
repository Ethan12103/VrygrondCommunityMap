import { Drawer, useMediaQuery, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import RenderGroup from './SearchPanel';
import { useTheme } from '@mui/system';
import Box from '@mui/material/Box';
import ServiceBox from './ServiceSearch';

interface ImgMediaCardProps {
    setPinLocation: React.Dispatch<React.SetStateAction<[number, number]>>;
  }

export const MuiDrawer = ({setPinLocation}: ImgMediaCardProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <SearchIcon />
            </IconButton>
            <Drawer
                anchor={'left'}
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                PaperProps={{
                    style: isMobile ? {
                        width: '100%',
                        flexShrink: 0,
                        height: '100%'
                    } : { position: 'absolute', left: 0, width: '400px', maxWidth: '400px', height: '92vh' }
                }}
            >
                <Box
                    sx={{
                        display: 'clear',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '10%',
                        left: 0,
                        right: 0,
                        p: 1,
                        marginBottom: '2rem'
                    }}
                >
                    <RenderGroup setPinLocation={setPinLocation} setIsDrawerOpen={setIsDrawerOpen}/>
                </Box>
                <Box
                    sx={{
                        display: 'clear',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '30%',
                        left: 0,
                        right: 0,
                        p: 1,
                        marginBottom: '2rem'
                    }}
                >
                    <ServiceBox setPinLocation={setPinLocation} setIsDrawerOpen={setIsDrawerOpen}/>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: '30%',
                        left: 0,
                        right: 0,
                        p: 1,
                    }}
                >
                </Box>
                <IconButton
                    size='large'
                    edge='end'
                    color='inherit'
                    aria-label='close'
                    onClick={handleCloseDrawer}
                    style={{ position: 'absolute', top: 8, right: 20, color: 'black' }}
                >
                    <CloseIcon />
                </IconButton>
            </Drawer>
        </>
    );
};