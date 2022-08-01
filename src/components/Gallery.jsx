import React,{ useEffect } from 'react';
import { Box,Typography,ThemeProvider,Grid } from '@mui/material';

import { translateAnimAll } from '../Animation/CommonAnim';

import { 
  SubHeadingTypoTheme
} from '../MaterialUI/typography';

const Gallery = ({titleName,ImagesArray}) => {

  let socialIconObj = {
    selector:'work-img',
    classes:'opacity-low',
  }

  useEffect(() => {
    translateAnimAll(socialIconObj);
  },[]);

  return (
    <Box>
      <ThemeProvider theme={SubHeadingTypoTheme}>
        <Typography
          className='gallery-title-name'>
          {titleName}
        </Typography>
      </ThemeProvider>
      <Grid container spacing={2}>
        {
          ImagesArray.map((item,index)=>{
            return(
              <Grid item xs={6} xmd={3} key={index}
              sx={{height:{xs:'auto',sm:'400px', overflow:'hidden'}}}>
                <Box 
                component='img'
                src={item.img}
                alt={item.alt}
                className='work-img opacity-low'/>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

export default Gallery;