import React,{ useEffect } from 'react';
import { Stack,Box,Typography,Button,ThemeProvider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import { socialIconTheme } from '../MaterialUI/IconsTheme'
import heroImage from '../assets/images/heroImage.webp';
import yellowDots from '../assets/images/yellowDots.png';

import { heroTypography1,SubHeadingDetailsTypo } from '../MaterialUI/typography';
import { translateAnim,translateAnimAll } from '../Animation/CommonAnim';


const Herobanner = () => {

  let heroImageObj = {
    selector:'hero-image',
    classes:'translate-right',
  }

  let heroTextObj = {
    selector:'hero-text',
    classes:'translate-up',
  }
  let socialIconObj = {
    selector:'social-icon',
    classes:'opacity-0',
  }

  useEffect(() => {
    translateAnim(heroImageObj);
    translateAnim(heroTextObj);
    translateAnimAll(socialIconObj);
  },[]);

  return (
    <Box
      className='main-hero-wrapper'
      id='main-hero-wrapper'>
      <Box
        className='hero-wrapper'
        sx={{flexDirection:{xs:'column',md:'row-reverse'}}}>
          <Box
            className='hero-top-wrapper'
            sx={{width:{xs:'100%',md:'auto'}}}>
            <Box
              className='yellow-dots'
              component='img'
              src={yellowDots}
              sx={{width:{xs:'192px',sm:'230px'}}}
            />
            <Box
              className="social-link">
                <a href="">
                  <ThemeProvider theme={socialIconTheme}>
                    <FacebookIcon className='facebook social-icon opacity-0'/>
                  </ThemeProvider>
                </a>
                <a href="">
                  <ThemeProvider theme={socialIconTheme}>
                    <InstagramIcon className='instagram social-icon opacity-0'/>
                  </ThemeProvider>
                </a>
                <a href="">
                  <ThemeProvider theme={socialIconTheme}>
                    <EmailIcon className='gmail social-icon opacity-0'/>
                  </ThemeProvider>
                </a>
              </Box>
            <Box
              className='hero-image-wrapper'
              sx={{height:{sm:'600px',xs:'490px'}}}>
              <Box
                className='hero-image translate-right'
                component='img'
                src={heroImage}
                sx={{height:{sm:'620px',xs:'490px'}}}
              />
            </Box>
          </Box>
          <Box
            className='hero-text translate-up'>
              <ThemeProvider theme={heroTypography1}>
                  <Typography>
                    <Box component='span' color='var(--secondary-color)'>
                      Hi!
                    </Box> I'm  <Box component='span'
                    className='hero-intro-name'> jhon doe</Box>
                  </Typography>
              </ThemeProvider>
              <ThemeProvider theme={heroTypography1}>
                  <Typography
                  sx={{fontSize:{xs:'23px',sm:'30px',md:'40px'}}}
                  fontFamily='var(--font-family-Berkshire)'>
                    <Box component='span' color='var(--secondary-color)'>photo</Box>grapher, <Box component='span' color='var(--secondary-color)'>video</Box>grapher.
                  </Typography>
              </ThemeProvider>
              <ThemeProvider theme={SubHeadingDetailsTypo}>
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