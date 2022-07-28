import React from 'react';
import { Stack,Box,Typography,Button,ThemeProvider } from '@mui/material';

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