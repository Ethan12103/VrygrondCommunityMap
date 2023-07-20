import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import data from './FullOrgList.json';

type ItemData = {
  Name: string;
  Services?: string; // Make 'Services' optional
};

export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const [orgData, setOrgData] = useState<ItemData[]>([]);

  useEffect(() => {
    setOrgData(data);
  }, []);

  return (
    <div>
      <Autocomplete
        id="org-search"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={orgData.map((item) => item.Name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search organizations"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {open && orgData.length === 0 ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />

      <Autocomplete
        id="service-search"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={orgData.map((item) => item.Services || '')} // Ensure 'Services' is a string or use an empty string if it's undefined
        loading={open && orgData.length === 0}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search services"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {open && orgData.length === 0 ? <CircularProgress color="inherit" size={20} /> : null}
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
