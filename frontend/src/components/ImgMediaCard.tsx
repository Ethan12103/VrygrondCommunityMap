import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/placeholder.jpg"
        title="alt text"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          description here
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="place" size="large">
        <PlaceIcon />
      </IconButton>
      <IconButton aria-label="phone" size="large">
        <PhoneIcon />
      </IconButton>
      </CardActions>
    </Card>
  );
}
