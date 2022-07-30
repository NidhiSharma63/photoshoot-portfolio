import React,{useState} from 'react';

import { Stack,Box,Typography,ThemeProvider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { logoTypography } from '../MaterialUI/typography';
import { menuIcon } from '../MaterialUI/IconsTheme';
import SideNavbar  from './Sidebar';

const Navbar = () => {

  const [sideNavbarOpen,setSideNavbarOpen] = useState(false);
  const html = document.querySelector('html');

  sideNavbarOpen ? html.style.overflowY = 'hidden' : html.style.overflowY = 'auto';

  return (
   <>
     <Box
      className='navbar-wrapper'>
      <Box className='nav-shadow'></Box>
      {/* <Box className='nav-shadow'></Box> */}
      <Box
      className='navbar'>
        <Box>
        <ThemeProvider theme={logoTypography}>
          <Typography 
          sx={{
            fontSize: {sm:'35px',xs:'26px'},
          }}>
            JS
          </Typography>
        </ThemeProvider>
        </Box>
        <Box
        className='nav-items-wrapper'>
          <Box
          className='nav-menu'>
            <Stack
            direction='row'
            spacing={10}>
              <a href='#hero-banner-wrapper' className='nav-link'>Home</a>
              <a href='#services-wrapper' className='nav-link'>Services</a>
              <a href='#project-wrapper' className='nav-link'>Work</a>
              <a href='#blog-wrapper' className='nav-link'>Contact</a>
            </Stack>
          </Box>
          <Box>
          </Box>  
        </Box>
        <Box 
        component='span'
        className='menu-icon'>
          <ThemeProvider theme={menuIcon}>
            <MenuIcon onClick={()=>setSideNavbarOpen(true)}/>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
    <SideNavbar NavbarOpen={sideNavbarOpen} setSideNavbarOpen={setSideNavbarOpen}/>
   </>
  )
}

export default Navbar;