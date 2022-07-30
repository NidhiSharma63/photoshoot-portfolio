import React,{ useEffect } from 'react';
import { Box,ThemeProvider,Typography } from '@mui/material';
import { 
  headingTheme,
  SubHeadingTypoTheme,
  SubHeadingDetailsTypo,
  SkillsDetailsTypo 
} from '../MaterialUI/typography';

import { servicesData,skillExepriene } from '../data';
import { translateAnim,translateAnimAll } from '../Animation/CommonAnim';


const Services = () => {

  let mainServiceWrapperObj = {
    selector:'main-service-wrapper',
    classes:'translate-up',
  }

  let serviceObj = {
    selector:'service',
    classes:'opacity-low',
  }

  let skillObj = {
    selector:'skills-details',
    classes:'opacity-low',
  }

  useEffect(() => {
    translateAnim(mainServiceWrapperObj);
    translateAnimAll(serviceObj);
    translateAnimAll(skillObj);
  },[]);


  return (
    <Box
      className='main-service-wrapper translate-up'
      id='main-service-wrapper'>
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
                  className='service opacity-low'
                  key={index}>
                  <ThemeProvider theme={SubHeadingTypoTheme}>
                    <Typography textAlign='center'>{service.title}</Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={SubHeadingDetailsTypo}>
                    <Typography sx={{fontSize:{xs:'15px',sm:'20px'}}}>{service.details}</Typography>
                  </ThemeProvider>
                </Box>
              )
            })
          }
        </Box>
        <Box
        className='skills-details-wrapper'
        sx={{gap:{xs:'10px',sm:'20px'}}}>
          {
            skillExepriene.map((skill,index)=>{
              return(
                <Box
                className='skills-details opacity-low'
                key={index}
                textAlign='center'>
                  <ThemeProvider theme={SkillsDetailsTypo}>
                    <Typography 
                      color='var(--color-white)'>{skill.desc}
                      <Box 
                        component='span' 
                        color='var(--secondary-color)'
                        sx={{fontSize:{xs:'30px',sm:'55px'}}}>+
                      </Box>
                    </Typography>
                  </ThemeProvider>
                  <Box 
                  className='skill-name'
                  sx={{fontSize:{xs:'14px',sm:'20px',md:'25px'}}}
                  >{skill.title}</Box>
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