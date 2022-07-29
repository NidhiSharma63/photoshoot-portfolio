import React from 'react';
import { Stack,Box,Typography,Button,ThemeProvider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import { socialIconTheme } from '../MaterialUI/IconsTheme'
import heroImage from '../assets/images/heroImage.webp';
import yellowDots from '../assets/images/yellowDots.png';

import { heroTypography1,subHeadingTypoTheme } from '../MaterialUI/typography'

const Herobanner = () => {
  return (
    <Box
      className='main-hero-wrapper'>
      <Box
        className='hero-wrapper'>
          <Box
            className='hero-top-wrapper'>
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
                className='hero-image-wrapper'>
                <Box
                  className='hero-image'
                  component='img'
                  src={heroImage}
                  height='490px'
                />
              </Box>
          </Box>
          <Box
            className='hero-text'>
              <ThemeProvider theme={heroTypography1}>
                  <Typography>
                    <Box component='span' color='var(--secondary-color)'>
                      Hi!
                    </Box> I'm  <span 
                    className='hero-intro-name'>
                    jhon doe
                    </span>
                  </Typography>
              </ThemeProvider>
              <ThemeProvider theme={heroTypography1}>
                  <Typography
                  fontSize='23px'
                  fontFamily='var(--font-family-Berkshire)'>
                    <Box component='span' color='var(--secondary-color)'>photo</Box>grapher, <Box component='span' color='var(--secondary-color)'>video</Box>grapher.
                  </Typography>
              </ThemeProvider>
              <ThemeProvider theme={subHeadingTypoTheme}>
                  <Typography>
                    I wanna help you to get beautiful images to discover your journey.
                  </Typography>
              </ThemeProvider>
          </Box>
      </Box>
      <Box className='herobanner-bottomShadow'></Box>
    </Box>
  )
}

export default Herobanner;