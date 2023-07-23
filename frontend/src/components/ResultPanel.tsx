import * as React from 'react';
import { Global } from '@emotion/react';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ControlledAccordions from './ControlledAccordions'

type ItemData = {
    Name: string;
    ['Services']: string;
    ['Address 1']: string;
    ['Address 2']: string;
    ['Contact Number 1']: string;
    ['Contact Number 2']: string;
    ['Contact Persons']: string;
    ['Hours']: string;
    ['Email Address 1']: string;
    ['Email Address 2']: string;
    Website: string;
    Latitude: number;
    Longitude: number;
    ['Image']: string;
};

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

interface SwipeableEdgeDrawerProps {
    onSearch: () => void;
    setPinLocation: React.Dispatch<React.SetStateAction<[number, number]>>;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SwipeableEdgeDrawer({ onSearch, setPinLocation, setIsDrawerOpen }: SwipeableEdgeDrawerProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState<ItemData[]>([]);
    const [isResultsPanelOpen, setIsResultsPanelOpen] = React.useState(false);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000');
        const data = await response.json();
        setData(data);
    };

    const toggleDrawer = (newOpen: boolean) => async () => {
        if(newOpen) {
            await onSearch();
            fetchData();
        }
        setOpen(newOpen);
        setIsResultsPanelOpen(newOpen);
        setIsDrawerOpen(newOpen);
    };

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(90% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Button 
                onClick={() => {toggleDrawer(true)(); onSearch();}} 
                size='large' 
                variant="contained"
                style={{ backgroundColor: 'black', color: 'white', width: '100%' }} // added this line
                endIcon={<SearchIcon />}
            >
                Update & Search
            </Button>
            <SwipeableDrawer
                anchor={'bottom'}
                open={isResultsPanelOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                ModalProps={{
                    keepMounted: true,
                }}
                PaperProps={{
                    style: isMobile ? {} : { position: 'absolute', left: 0, width: 'auto', maxWidth: '400px' }
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <Typography sx={{ p: 2, color: 'text.secondary' }}>Results</Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <ControlledAccordions data={data} setPinLocation={setPinLocation} setIsResultsPanelOpen={setIsResultsPanelOpen} setIsDrawerOpen={setIsDrawerOpen}/>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}