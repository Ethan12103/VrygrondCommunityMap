import { Drawer, useMediaQuery, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { ToggleButtonMenu } from './Sidebar';
import ResultPanel from './ResultPanel';
import { useTheme } from '@mui/system';

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
                    style: isMobile ? { width: '100%', flexShrink: 0 } : { position: 'absolute', left: 0, width: '400px', maxWidth: '400px' }
                }}
            >
                <ToggleButtonMenu />
                <ResultPanel />
                <IconButton
                    size='large'
                    edge='end'
                    color='inherit'
                    aria-label='close'
                    onClick={handleCloseDrawer}
                    style={{ position: 'absolute', top: 8, right: 8, color:'black' }}
                >
                    <CloseIcon />
                </IconButton>
            </Drawer>
        </>
    );
};