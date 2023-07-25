import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import data from './data/FullOrgNameList.json';
import SwipeableEdgeDrawer from './ResultPanel';

type ItemData = {
  Name: string;
  Services?: string; // Make 'Services' optional
};
interface ImgMediaCardProps {
  setPinLocation: React.Dispatch<React.SetStateAction<[number, number]>>;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBox({setPinLocation, setIsDrawerOpen}: ImgMediaCardProps) {
  const [open, setOpen] = useState(false);
  const [orgData, setOrgData] = useState<ItemData[]>([]);
  const [selectedOrg, setSelectedOrg] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Transform the array of strings into an array of ItemData objects
    const transformedData: ItemData[] = data.map((name) => ({ Name: name }));
    setOrgData(transformedData);
  }, []);

  async function sendOrgName() {
    const response = await fetch('http://localhost:8000/searchByName', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ organization: selectedOrg }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
  }

  async function sendOrgService() {
    const response = await fetch('http://localhost:8000/searchByService', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ organization: inputValue }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
  }
  async function sendData() {
    if (selectedOrg.trim()) {
      await sendOrgName();
    }
    
    if (inputValue.trim()) {
      await sendOrgService();
    }
  }
  return (
    <div>
      <Autocomplete
        id="org-name-search"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={(event, newValue) => {
          if (newValue !== null) {
            setSelectedOrg(newValue);
          }
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
            sx={{ height: '3rem', width: '100%', marginBottom: '1rem'}}
          />
        )}
      />
      <Autocomplete
          disablePortal
          id="org-service-search"
          options={topServices}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => <TextField {...params} label="Search Service?" sx={{ height: '3rem', width: '100%', marginBottom: '1rem'}}/>}
        />
      <SwipeableEdgeDrawer onSearch={sendData} setPinLocation={setPinLocation} setIsDrawerOpen={setIsDrawerOpen}/>
    </div>
  );
}
const labels = [
  "Health",
  "Medical",
  "Art therapy",
  "After school programs",
  "children",
  "Abused women",
  "Vulnerable children",
  "School",
  "Education",
  "Volunteer",
  "Work",
  "Lifeskills",
  "Legal aid",
  "Work",
  "ECD",
  "Mentoring",
  "LGBTQ+",
  "Shelter",
  "Employment",
  "Literacy/numeracy programs",
  "College prep",
  "Music",
];
const topServices = labels.map((label) => ({ label }));  