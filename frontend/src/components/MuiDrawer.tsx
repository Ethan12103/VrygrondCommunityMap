import { Drawer, Box, Typography, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { ToggleButtonMenu } from './Sidebar';
import ResultPanel from './ResultPanel';
import RenderGroup from "./SearchPanel";

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <RenderGroup />
            <ToggleButtonMenu />
            <ResultPanel />
        </Drawer>
        </>
    )
}
