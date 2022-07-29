import React from 'react';
import { Box,Typography,ThemeProvider } from '@mui/material';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


import { 
  headingTheme,
  heroTypography1
} from '../MaterialUI/typography';

import { 
  socialIconTheme
} from '../MaterialUI/IconsTheme';

const Contact = () => {
  return (
    <Box
      className='main-contact-wrapper'>
      <Box
        className='contact-wrapper'>
         <ThemeProvider theme={headingTheme}>
          <Typography>
            Contact<Box component='span' color='var(--secondary-color)'> me</Box> 
          </Typography>
         </ThemeProvider>
            <Box
              className='contact-section-1'>
              <Box
              display='flex'
              gap='30px'>
                <ThemeProvider theme={socialIconTheme}>
                  <LocalPhoneIcon sx={{fontSize:'43px'}}/>
                </ThemeProvider>
                <ThemeProvider theme={heroTypography1}>
                  <Typography fontSize='23px'>9876672678</Typography>
                </ThemeProvider>
              </Box>
              <Box
              display='flex'
              gap='30px'>
                <ThemeProvider theme={socialIconTheme}>
                 <WhatsAppIcon sx={{fontSize:'43px'}}/>
                </ThemeProvider>
                <ThemeProvider theme={heroTypography1}>
                  <Typography fontSize='23px'>9876672678</Typography>
                </ThemeProvider>
              </Box>
            </Box>
            <Box
              className='contact-section-2'>
                <a href="">
                  <ThemeProvider theme={socialIconTheme}>
                    <FacebookIcon sx={{fontSize:'43px'}}/>
                  </ThemeProvider>
                </a>
                <a href="">
                  <ThemeProvider theme={socialIconTheme}>
                    <InstagramIcon sx={{fontSize:'43px'}}/>
                  </ThemeProvider>
                </a>
                <a href="">
                  <ThemeProvider theme={socialIconTheme}>
                    <EmailIcon sx={{fontSize:'43px'}}/>
                  </ThemeProvider>
                </a>
            </Box>
      </Box>
    </Box>
  )
}

export default Contact;