import React from 'react';
import { Box,Typography,ThemeProvider } from '@mui/material';

const Navbar = () => {
  return (
    <Typography
    sx={{
      fontSize:{lg:'10rem',xs:'5rem'},
      color:{lg:'green',xs:'orange'},

    }}>Hello World</Typography>
  )
}

export default Navbar;