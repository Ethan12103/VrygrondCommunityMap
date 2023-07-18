import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <div>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300, padding: '10px'}}
      renderInput={(params) => <TextField {...params} label="What organisation?" />}
    />
      <Autocomplete
      disablePortal
      multiple
      id="combo-box-demo"
      options={services}
      sx={{ width: 300, padding: '10px' }}
      renderInput={(params) => <TextField {...params} label="What service?" />}
    />
    </div>
  );
}

const top100Films = [
  { label: 'Capricorn Hyper Care', year: 1994 },
  { label: 'Ben Bikes', year: 1972 },
  { label: 'Cape Times Fresh Air Fund', year: 1974 },
  { label: 'Artscape', year: 2008 },
  { label: 'Carel du Toit Center', year: 1957 },
  { label: "Chrysalis Academy", year: 1993 },
  { label: 'Dominican School for the Deaf', year: 1994 },
  {
    label: 'Jo\'s School',
    year: 2003,
  },
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