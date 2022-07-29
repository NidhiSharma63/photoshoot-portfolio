import React, { useEffect } from 'react';

import { Stack,Box,ThemeProvider } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { crossIcon } from '../MaterialUI/IconsTheme';

const SideNavbar = ({setSideNavbarOpen,NavbarOpen}) => {
  
    useEffect(()=>{
      const sideNavbar = document.querySelector('.side-navbar-wrapper');
      NavbarOpen? sideNavbar.style.transform = 'translateX(0%)' : sideNavbar.style.transform = 'translateX(100%)';
    },[NavbarOpen]);

    const handleClearEvent = () =>{
      setSideNavbarOpen(false);
    }


  return (
    <Box
    className='side-navbar-wrapper'
    >
      <Box
      className='side-navbar'>
        <Box 
        component='span'
        className='close-icon'>
          <ThemeProvider theme={crossIcon}>
            <ClearIcon onClick={() => handleClearEvent()}/>
          </ThemeProvider>
        </Box>
        <Box>
        <Stack
          spacing={5}>
            <a 
              href='#main-hero-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Home</a>
            <a 
              href='#main-service-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Services</a>
            <a 
              href='#work-main-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Work</a>
            <a 
              href='#main-contact-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Contact</a>
        </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default SideNavbar;