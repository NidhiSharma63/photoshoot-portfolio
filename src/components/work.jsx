import React from 'react';
import { Box,Typography,ThemeProvider,Grid } from '@mui/material';

import { 
  headingTheme,
  ServicesTextSecondaryColor,
  subHeadingTypoTheme,
  SkillsDetailsTypo 
} from '../MaterialUI/typography';

import img1 from '../assets/images/photoShoot/img1.jpg';
import img2 from '../assets/images/photoShoot/img2.jpg';
import img3 from '../assets/images/photoShoot/img3.jpg';
import img4 from '../assets/images/photoShoot/img4.jpg';
import img5 from '../assets/images/photoShoot/img5.jpg';



const Work = () => {
  return (
    <Box
      className='work-main-wrapper'>
      <Box
        className='work-wrapper'>
        <ThemeProvider theme={headingTheme}>
          <Typography>Wor
            <Box component='span' color='var(--secondary-color)'>k</Box>
          </Typography>
        </ThemeProvider>
        <Box>
          <ThemeProvider theme={ServicesTextSecondaryColor}>
            <Typography color='var(--color-white)'>Photoshoot Images</Typography>
          </ThemeProvider>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box 
              component='img'
              src={img1}
              className='photoshoot-img'/>
            </Grid>
            <Grid item xs={6}>
              <Box 
                component='img'
                src={img2}
                className='photoshoot-img'/>
            </Grid>
           
            <Grid item xs={12} height='300px'>
              <Box 
                component='img'
                src={img4}
                className='photoshoot-img'/>
            </Grid>
            <Grid item xs={6}>
              <Box 
                component='img'
                src={img3}
                className='photoshoot-img'/>
            </Grid>
            <Grid item xs={6}>
              <Box 
                component='img'
                src={img5}
                className='photoshoot-img'/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Work;