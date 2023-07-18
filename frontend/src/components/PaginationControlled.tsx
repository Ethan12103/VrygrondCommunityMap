import * as React from 'react';
import Pagination from '@mui/material/Pagination';

interface Props {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

export default function PaginationControlled({ count, page, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50px', // Set the height of the container as needed
    }}>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}