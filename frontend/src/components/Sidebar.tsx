import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { MuiDrawer } from './MuiDrawer';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '2rem',
  marginLeft: '0',
});

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const ButtonStyled = styled(Button)({
  margin: '1rem',
  width: '200px',
  textTransform: 'none',
});

const Dropdown = styled(Menu)({
  marginTop: '8px',
});

export const ToggleButtonMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Root>
        <ButtonStyled
          variant="outlined"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Category 1
        </ButtonStyled>
        <ButtonStyled
          variant="outlined"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Category 2
        </ButtonStyled>
        <ButtonStyled
          variant="outlined"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Category 3
        </ButtonStyled>
        <ButtonStyled
          variant="outlined"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Category 4
        </ButtonStyled>
        <ButtonStyled
          variant="outlined"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Category 5
        </ButtonStyled>
        <ButtonStyled
          variant="outlined"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Category 6
        </ButtonStyled>
        <ButtonStyled
          variant="outlined"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Category 7
        </ButtonStyled>
      </Root>
      <Dropdown
        id="dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Dropdown>
    </Container>
  );
};
