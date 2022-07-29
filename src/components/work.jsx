import React from 'react';
import { Box,Typography,ThemeProvider,Grid } from '@mui/material';
import Gallery from './Gallery';

import { 
  headingTheme,
  ServicesTextSecondaryColor,
  subHeadingTypoTheme,
  SkillsDetailsTypo 
} from '../MaterialUI/typography';

import { PhotoshootImages,weddingShootImages } from '../data';
import img1 from '../assets/images/photoShoot/img1.jpg';
import img2 from '../assets/images/photoShoot/img2.jpg';
import img3 from '../assets/images/photoShoot/img3.jpg';
import img4 from '../assets/images/photoShoot/img4.jpg';
import img5 from '../assets/images/photoShoot/img5.jpg';

import wImg1 from '../assets/images/weddingShoot/w-img1.jpg';
import wImg2 from '../assets/images/weddingShoot/w-img2.jpg';
import wImg3 from '../assets/images/weddingShoot/w-img3.jpg';
import wImg4 from '../assets/images/weddingShoot/w-img4.jpg';
import wImg5 from '../assets/images/weddingShoot/w-img5.jpg';





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
        <Box
        className='main-galler-wrapper'>
          <Gallery 
            titleName={'Photoshoot Images'}
            ImagesArray={PhotoshootImages}/>
          <Gallery 
          titleName={'Wedding shoot Images'}
          ImagesArray={weddingShootImages}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Work;


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