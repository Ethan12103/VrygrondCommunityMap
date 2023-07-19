import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';

type ItemData = {
  Name: string;
  ['Services']: string;
  ['Address 1']: string;
  ['Address 2']: string;
  ['Contact Number 1']: string;
  ['Contact Number 2']: string;
  ['Contact Persons']: string;
  ['Email Address 1']: string;
  ['Email Address 2']: string;
  Website: string;
};

export default function SearchBox() {
  const [data, setData] = useState<ItemData[]>([]);
  React.useEffect(() => {
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Received data:', data);
        setData(data.map((org: any[]) => Object.fromEntries(org)));
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, []);
  return (
    <div>
<<<<<<< HEAD
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={organizations}
        sx={{ width: 300, padding: '10px' }}
        renderInput={(params) => <TextField {...params} label='What organization?' />}
      />
      <Autocomplete
        disablePortal
        multiple
        id='combo-box-demo'
        options={services}
        sx={{ width: 300, padding: '10px' }}
        renderInput={(params) => <TextField {...params} label='What service?' />}
      />
=======
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data.map((item) => item.Name)}
          sx={{ width: 300, padding: '10px'}}
          renderInput={(params) => <TextField {...params} label="What organisation?" />}
          />
          <Autocomplete
            disablePortal
            multiple
            id='combo-box-demo'
            options={services}
            sx={{ width: 300, padding: '10px' }}
            renderInput={(params) => <TextField {...params} label='What service?' />}
          />
>>>>>>> 19286b5060a001f9a2c9e9a2def5d1c2d45d34bd
    </div>
  );
}

const organizations = [
  { label: 'Capricorn Hyper Care', year: 1994 },
  { label: 'Ben Bikes', year: 1972 },
  { label: 'Cape Times Fresh Air Fund', year: 1974 },
  { label: 'Artscape', year: 2008 },
  { label: 'Carel du Toit Center', year: 1957 },
  { label: 'Chrysalis Academy', year: 1993 },
  { label: 'Dominican School for the Deaf', year: 1994 },
  { label: 'Jo\'s School', year: 2003, },
  { label: 'Law For All', year: 1966 },
];
const services = [
  { label: 'Food' },
  { label: 'Clothing' },
  { label: 'School' },
  { label: 'Library' },
  { label: 'Abuse Center' },
  { label: 'Computer Lab' },
];