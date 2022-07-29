import React from 'react';
import { Stack,Box,ThemeProvider,Typography } from '@mui/material';
import { 
  headingTheme,
  ServicesTextSecondaryColor,
  subHeadingTypoTheme,
  SkillsDetailsTypo 
} from '../MaterialUI/typography'

import { servicesData,skillExepriene } from '../data';

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
        <Box
        className='skills-details-wrapper'>
          {
            skillExepriene.map((skill,index)=>{
              return(
                <Box
                className='skills-details'
                key={index}
                textAlign='center'>
                  <ThemeProvider theme={SkillsDetailsTypo}>
                    <Typography 
                      color='var(--color-white)'>{skill.desc}
                      <Box 
                        component='span' 
                        color='var(--secondary-color)'
                        fontSize='30px'>+
                      </Box>
                    </Typography>
                  </ThemeProvider>
                  <Box className='skill-name'>{skill.title}</Box>
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