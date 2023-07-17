import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';

interface imgMediaCardProps {
  imgURL: string;
  description: string;
  location: string;
  phoneNumber: string;
}

export default function ImgMediaCard({ imgURL, description, location, phoneNumber }: imgMediaCardProps) {
  const handlePhoneIconClick = () => {
    // Removing non-numeric characters from the phone number
    const numericPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    // Creating the phone number URL
    const phoneURL = `tel:${numericPhoneNumber}`;
    // Opening the phone number URL
    window.open(phoneURL);
  };

  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={imgURL} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label={location} size="large">
          <PlaceIcon />
        </IconButton>
        <IconButton aria-label={phoneNumber} size="large" onClick={handlePhoneIconClick}>
          <PhoneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
