import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div style={{
      position: 'relative',
      paddingBottom: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '100px', // Set the height of the container as needed
    }}>
      <Pagination
        sx={{
          position: 'absolute',
          bottom: 0,
        }}
        count={10}
        page={page}
        onChange={handleChange}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}
