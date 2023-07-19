import * as React from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';

interface itemProps {
  item: any;
}

export default function ImgMediaCard({ item }: itemProps) {
  const handlePhoneIconClick = () => {
    // Removing non-numeric characters from the phone number
    const numericPhoneNumber = item['Contact Number 1'].replace(/[^0-9]/g, '');
    // Creating the phone number URL
    const phoneURL = `tel:${numericPhoneNumber}`;
    // Opening the phone number URL
    window.open(phoneURL);
  };

  // Check if the item is available or not
  const isItemAvailable =
    item['Services'] ||
    item['Contact Persons'] ||
    item['Email Address 1'] ||
    item['Email Address 2'] ||
    item.Website ||
    item['Address 1'] ||
    item['Address 2'] ||
    item['Contact Number 1'];

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
              Contact Person: {item['Contact Persons']}
              <br />
            </>
          )}
          {item['Email Address 1'] && (
            <>
              <Link href={`mailto:${item['Email Address 1']}`}>{item['Email Address 1']}</Link>
              <br />
            </>
          )}
          {item['Email Address 2'] && (
            <>
              <Link href={`mailto:${item['Email Address 2']}`}>{item['Email Address 2']}</Link>
              <br />
            </>
          )}
          {item.Website && (
            <>
              <Link href={item.Website}>{item.Website}</Link>
              <br />
            </>
          )}
          {item['Address 1'] && <div>{item['Address 1']}</div>}
          {item['Address 2'] && <div>{item['Address 2']}</div>}
        </Typography>
      </CardContent>
      <CardActions>
        {item['Address 1'] || item['Address 2'] ? (
          <IconButton aria-label='place' size='large'>
            <PlaceIcon />
          </IconButton>
        ) : null}
        {item['Contact Number 1'] ? (
          <IconButton aria-label={item['Contact Number 1']} size='large' onClick={handlePhoneIconClick}>
            <PhoneIcon />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  ) : null;
}
