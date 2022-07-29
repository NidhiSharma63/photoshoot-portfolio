import React from 'react';
import { Box,Typography,ThemeProvider,Grid } from '@mui/material';

import { 
  headingTheme,
  SubHeadingTypoTheme,
  subHeadingTypoTheme,
  SkillsDetailsTypo 
} from '../MaterialUI/typography';

const Gallery = ({titleName,ImagesArray}) => {
  console.log(ImagesArray);
  return (
    <Box>
      <ThemeProvider theme={SubHeadingTypoTheme}>
        <Typography 
          textAlign='center'
          fontSize='25px'
          color='var(--color-white)'
          marginBottom='30px'>
          {titleName}
        </Typography>
      </ThemeProvider>
      <Grid container spacing={1}>
        {
          ImagesArray.map((item,index)=>{
            return(
              <Grid item xs={item.span} key={index}>
                <Box 
                component='img'
                src={item.img}
                alt={item.alt}
                className='photoshoot-img'/>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

export default Gallery;