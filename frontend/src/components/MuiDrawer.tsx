import { Drawer, useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { ToggleButtonMenu } from './Sidebar';
import ResultPanel from './ResultPanel';
import { useTheme } from '@mui/system';

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={'left'}
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                PaperProps={{
                    style: isMobile ? {width: '100%', flexShrink: 0} : { position: 'absolute', left: 0, width: '400px', maxWidth: '400px' }
                }}
            >
                <ToggleButtonMenu />
                <ResultPanel />
            </Drawer>
        </>
    )
}