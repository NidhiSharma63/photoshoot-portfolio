import React,{ useEffect } from 'react';
import { Box,Typography,ThemeProvider,Grid } from '@mui/material';
import Gallery from './Gallery';

import { 
  headingTheme
} from '../MaterialUI/typography';

import { PhotoshootImages,weddingShootImages } from '../data';
import { translateAnim } from '../Animation/CommonAnim';


const Work = () => {

  let workObj = {
    selector:'work-main-wrapper',
    classes:'translate-up',
  }

  useEffect(() => {
    translateAnim(workObj);
  },[]);

  return (
    <Box
      className='work-main-wrapper translate-up'
      id='work-main-wrapper'>
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
