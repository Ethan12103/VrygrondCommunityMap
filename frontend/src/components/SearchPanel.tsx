import * as React from 'react';
import { TextField, CircularProgress } from '@mui/material';
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
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const fetchData = async (searchString: string, path:string) => {
    const response = await fetch(`http://localhost:8000/${path}`, {
      method: 'POST', 
      body: JSON.stringify({ searchString }),
      headers: {"Content-Type": "application/json"}
    });

    return response.json(); 
  }

  useEffect(() => {
    let active = true;
    
    if (open && active) {
      fetchData('search string', 'data').then((items:any) => {
        setData(items);
      });
    }
    
    return () => {
      active = false;
    };
  }, [open]);

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.Name === value.Name}
        getOptionLabel={(option) => option.Name}
        options={data}
        loading={open && data.length === 0}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search organizations"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {open && data.length === 0 ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />

      <Autocomplete
        id='combo-box-demo'
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.Services === value.Services}
        getOptionLabel={(option) => option.Services}
        options={data}
        loading={open && data.length === 0}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search services"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {open && data.length === 0 ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}
