import * as React from 'react';
import Button from '@mui/material/Button';
import { styled, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
          aria-label="close"
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
        <IconButton size="large" edge="start" color="inherit" onClick={handleClickOpen}>
            <HelpOutlineIcon />
        </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h1" fontSize={25} fontWeight={"bold"} gutterBottom>
            How to Use the Map
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography variant="h2" fontSize={15} fontWeight={"bold"} gutterBottom>
            Step 1:
          </Typography>
          <Typography fontSize={15} gutterBottom>
            Click on the search icon in the top right corner to open the search panel
          </Typography>
          <Typography variant="h2" fontSize={15} fontWeight={"bold"} gutterBottom>
            Step 2:
          </Typography>
          <Typography fontSize={15} gutterBottom>
            Choose the "Organisations" box to search for specific organisations. Choose the "Categories" box to search for all organisations within a category.
          </Typography>
          <Typography variant="h2" fontSize={15} fontWeight={"bold"} gutterBottom>
            Step 3:
          </Typography>
          <Typography fontSize={15} gutterBottom>
            Select a organisation/category and click "Update & Search". To search for all organisations leave both boxes blank.
          </Typography>
          <Typography variant="h2" fontSize={15} fontWeight={"bold"} gutterBottom>
            Step 4:
          </Typography>
          <Typography fontSize={15} gutterBottom>
            Scroll through organisations to find one that you need. Click on organisation to read more information about it.
          </Typography>
          <Typography variant="h2" fontSize={15} fontWeight={"bold"} gutterBottom>
            Step 5:
          </Typography>
          <Typography fontSize={15} gutterBottom>
            To find the location of the organisation on the map click on the pin icon in the bottom left of the organisation information box.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}