import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import SwipeableEdgeDrawer from './ResultPanel';

interface ImgMediaCardProps {
    setPinLocation: React.Dispatch<React.SetStateAction<[number, number]>>;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function ServiceBox({setPinLocation, setIsDrawerOpen}: ImgMediaCardProps) {
    const [inputValue, setInputValue] = useState("");
  
    async function sendOrgData() {
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
  
    return (
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={topServices}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search Service?" sx={{ height: '3rem', width: '24rem', marginBottom: '1rem'}}/>}
        />
        <SwipeableEdgeDrawer onSearch={sendOrgData} setPinLocation={setPinLocation} setIsDrawerOpen={setIsDrawerOpen}/>
      </div>
    );
  }

const labels = [
    "Health",
    "Medical",
    "Art therapy",
    "After school programs",
    "Children",
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