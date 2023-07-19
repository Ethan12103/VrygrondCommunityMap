import * as React from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HomeIcon from '@mui/icons-material/Home';
import LaunchIcon from '@mui/icons-material/Launch';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import Typography from '@mui/material/Typography';

interface itemProps {
  item: any;
}

export default function ImgMediaCard({ item }: itemProps) {
  const handlePhoneIconClick = (phoneNumber: string | number) => {
    const phoneString = String(phoneNumber); // Convert to string if it's a number
    // Removing non-numeric characters from the phone number
    const numericPhoneNumber = phoneString.replace(/[^0-9]/g, '');
    // Creating the phone number URL
    const phoneURL = `tel:${numericPhoneNumber}`;
    // Opening the phone number URL
    window.open(phoneURL);
  };

  // Check if the item is available or not
  const isItemAvailable =
    item['Services'] ||
    item['Address 1'] ||
    item['Address 2'] ||
    item['Contact Number 1'] ||
    item['Contact Number 2'] ||
    item['Contact Persons'] ||
    item['Hours'] ||
    item['Email Address 1'] ||
    item['Email Address 2'] ||
    item.Website;

  return isItemAvailable ? (
    <Card>
      <CardMedia
        sx={{ minHeight: '80px', minWidth: '100%' }}
        image='https://static.wixstatic.com/media/770783_586964e6e955422da8a93dc8ab8b6156~mv2.jpg/v1/fill/w_891,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/BAP%20LOGO%202015%20slogan_open%20file%20no%20backgr.jpg'
      />
      <CardContent>
        {item['Services'] && (
          <div>
            {item['Services']
              .split(',')
              .map((service: string, index: number) => (
                <Chip key={index} label={service.trim()} size='small' style={{ margin: '0 5px 5px 0' }} />
              ))}
          </div>
        )}
        <Typography variant='body2' color='text.secondary'>
          {item['Contact Persons'] && (
            <>
              <Chip icon={<ContactPageIcon />} color="primary" label={item['Contact Persons']} variant="outlined" />
              <br />
            </>
          )}
          {item['Hours'] && (
            <>
              <Chip icon={<EventAvailableIcon />} color="primary" label={item['Hours']} variant="outlined" />
              <br />
            </>
          )}
          {item['Email Address 1'] && (
            <>
              <Chip icon={<EmailIcon />} color="secondary" label={item['Email Address 1']} variant="outlined" component="a" href={`mailto:${item['Email Address 1']}`} clickable />
              <br />
            </>
          )}
          {item['Email Address 2'] && (
            <>
              <Chip icon={<EmailIcon />} color="secondary" label={item['Email Address 2']} variant="outlined" component="a" href={`mailto:${item['Email Address 2']}`} clickable />
              <br />
            </>
          )}
          {item.Website && (
            <>
              <Chip icon={<LaunchIcon />} color="info" label={item.Website} variant="outlined" component="a" href={item.Website} clickable />
              <br />
            </>
          )}
          {item['Address 1'] && (
            <>
              <Chip
                icon={<HomeIcon />}
                sx={{
                  height: 'auto',
                  '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                  },
                }}
                label={(
                  <>
                    {item['Address 1']}
                    <br />
                    {item['Address 2']}
                  </>
                )}
              />
            </>)}
        </Typography>
      </CardContent>
      <CardActions>
        {item['Address 1'] || item['Address 2'] ? (
          <IconButton aria-label='place' size='large'>
            <PlaceIcon />
          </IconButton>
        ) : null}
        {item['Contact Number 1'] ? (
          <IconButton
            aria-label={item['Contact Number 1']}
            size='large'
            onClick={() => handlePhoneIconClick(item['Contact Number 1'])}
          >
            <PhoneIcon />
          </IconButton>
        ) : null}
        {item['Contact Number 2'] ? (
          <IconButton
            aria-label={item['Contact Number 2']}
            size='large'
            onClick={() => handlePhoneIconClick(item['Contact Number 2'])}
          >
            <PhoneIcon />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  ) : null;
}