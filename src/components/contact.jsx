import React,{ useEffect } from 'react';
import { Box,Typography,ThemeProvider } from '@mui/material';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { translateAnim } from '../Animation/CommonAnim';


import { 
  headingTheme,
  heroTypography1
} from '../MaterialUI/typography';

import { 
  socialIconTheme
} from '../MaterialUI/IconsTheme';

const Contact = () => {

  let contactObj = {
    selector:'main-contact-wrapper',
    classes:'translate-contact',
  }

  useEffect(() => {
    translateAnim(contactObj);
  },[]);

  return (
    <Box
      className='main-contact-wrapper translate-contact'
      id="main-contact-wrapper">
      <Box
        className='contact-wrapper'
        >
         <ThemeProvider theme={headingTheme}>
          <Typography>
            Contact<Box component='span' color='var(--secondary-color)'> me</Box> 
          </Typography>
         </ThemeProvider>
          <Box
          className='contact-sections-wrapper'
          sx={{
            flexDirection:{xs:'column',md:'row'},
            gap:{xs:'30px',sm:'40px'},
          }}
          >
          <Box
              className='contact-section-1'
              sx={{
                flexDirection:{xs:'column',sm:'row'},
                gap:{xs:'20px',sm:'40px'},
              }}>
              <Box
              display='flex'
              alignItems='center'
              gap='30px'>
                <ThemeProvider theme={socialIconTheme}>
                  <LocalPhoneIcon sx={{fontSize:'43px'}}/>
                </ThemeProvider>
                <ThemeProvider theme={heroTypography1}>
                  <Typography sx={{fontSize:{xs:'23px',md:'26px'}}}>9876672678</Typography>
                </ThemeProvider>
              </Box>
              <Box
              display='flex'
              alignItems='center'
              gap='30px'>
                <ThemeProvider theme={socialIconTheme}>
                 <WhatsAppIcon sx={{fontSize:'43px'}}/>
                </ThemeProvider>
                <ThemeProvider theme={heroTypography1}>
                  <Typography sx={{fontSize:{xs:'23px',md:'26px'}}}>9876672678</Typography>
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
    </Box>
  )
}

export default Contact;