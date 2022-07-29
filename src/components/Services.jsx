import React from 'react';
import { Stack,Box,ThemeProvider,Typography } from '@mui/material';
import { headingTheme,ServicesTextSecondaryColor,subHeadingTypoTheme } from '../MaterialUI/typography'

import { servicesData } from '../data';

const Services = () => {
  return (
    <Box
      className='main-service-wrapper'>
        <Box className='service-shadow'></Box>
      <Box
        className='service-wrapper'>
        <ThemeProvider theme={headingTheme}>
          <Typography>
            <Box component='span' color='var(--secondary-color)'>S</Box>
            ervices</Typography>
        </ThemeProvider>
        <Box
        className='services-box'>
          {
            servicesData.map((service,index)=>{
              return (
                <Box
                  className='service'
                  key={index}>
                  <ThemeProvider theme={ServicesTextSecondaryColor}>
                    <Typography textAlign='center'>{service.title}</Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={subHeadingTypoTheme}>
                    <Typography fontSize='15px'>{service.details}</Typography>
                  </ThemeProvider>
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Services;


{/* <Box
className='service-photography'>
<ThemeProvider theme={ServicesTextSecondaryColor}>
  <Typography>Photoshoot</Typography>
</ThemeProvider>
<ThemeProvider theme={subHeadingTypoTheme}>
<Typography textAlign='start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum at distinctio libero adipisci quibusdam.</Typography>
</ThemeProvider>
</Box>
<Box
className='service-videography'
textAlign='end'>
<ThemeProvider theme={ServicesTextSecondaryColor}>
<Typography>videography</Typography>
</ThemeProvider>
<ThemeProvider theme={subHeadingTypoTheme}>
 <Typography textAlign='end'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum at distinctio libero adipisci quibusdam.</Typography>
</ThemeProvider>
</Box> */}