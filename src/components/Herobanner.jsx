import React from 'react';
import { Stack,Box,Typography,Button,ThemeProvider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import { socialIconTheme } from '../MaterialUI/IconsTheme'
import heroImage from '../assets/images/heroImage.webp';
import yellowDots from '../assets/images/yellowDots.png';



const Herobanner = () => {
  return (
    <Box
      className='main-hero-wrapper'>
      <Box
        className='hero-wrapper'>
          <Box
            className='hero-image-wrapper'>
              <Box
               className='yellow-dots'
               component='img'
                src={yellowDots}
                position='absolute'
              />
              <Box
                className="social-link">
                  <a href="">
                    <ThemeProvider theme={socialIconTheme}>
                      <FacebookIcon className='facebook'/>
                    </ThemeProvider>
                  </a>
                  <a href="">
                    <ThemeProvider theme={socialIconTheme}>
                      <InstagramIcon className='instagram'/>
                    </ThemeProvider>
                  </a>
                  <a href="">
                    <ThemeProvider theme={socialIconTheme}>
                      <EmailIcon className='gmail'/>
                    </ThemeProvider>
                  </a>
                </Box>
              <Box
                className='hero-image'
                component='img'
                src={heroImage}
                height='450px'
              />
          </Box>
      </Box>
    </Box>
  )
}

export default Herobanner;