import * as React from 'react';
import Button from '@mui/material/Button';
import { styled, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import LaunchIcon from '@mui/icons-material/Launch';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
    ].join(','),
    fontSize: 12,
  },
});
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function HelpPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton size='large' edge='start' color='inherit' onClick={handleClickOpen}>
        <HelpOutlineIcon />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
          <Typography variant='h1' fontSize={16} fontWeight={'bold'} gutterBottom>
            How to Use
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography variant='h2' fontSize={12} fontWeight={'bold'} gutterBottom>
            Step 1:
          </Typography>
          <Typography fontSize={16} gutterBottom>
            Click<SearchIcon fontSize='small' />to open the search panel. To close, click<CloseIcon fontSize='small' />.
          </Typography>
          <Typography variant='h2' fontSize={12} fontWeight={'bold'} gutterBottom>
            Step 2:
          </Typography>
          <Typography fontSize={16} gutterBottom>
            You can search for a specific organization, or all organizations in one or more categories.
          </Typography>
          <Typography variant='h2' fontSize={12} fontWeight={'bold'} gutterBottom>
          </Typography>
          <Typography fontSize={16} gutterBottom>
            You can type words or select from suggestions. To browse all, leave both boxes blank.
          </Typography>
          <Typography variant='h2' fontSize={12} fontWeight={'bold'} gutterBottom>
            Step 3:
          </Typography>
          <Typography fontSize={16} gutterBottom>
            Click on organization to know contact persons<ContactPageIcon fontSize='small' />, hours<EventAvailableIcon fontSize='small' />, emails<EmailIcon fontSize='small' />, websites<LaunchIcon fontSize='small' />, addresses<HomeIcon fontSize='small' />, etc.
          </Typography>
          <Typography variant='h2' fontSize={12} fontWeight={'bold'} gutterBottom>
            Step 4:
          </Typography>
          <Typography fontSize={16} gutterBottom>
            Click<PlaceIcon fontSize='small'/>button to spot the organization on map. Click<PhoneIcon fontSize='small' />button to call the organization.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}