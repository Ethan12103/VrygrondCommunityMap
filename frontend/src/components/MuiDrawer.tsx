import { Drawer, useMediaQuery, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import ResultPanel from './ResultPanel';
import RenderGroup from './SearchPanel';
import { useTheme } from '@mui/system';
import Box from '@mui/material/Box';

export const MuiDrawer = () => {
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
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '20%',
                        left: 0,
                        right: 0,
                        p: 1,
                    }}
                >
                    <RenderGroup />
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