import React from 'react';
import { Box,Typography,ThemeProvider } from '@mui/material';
import { customBreakPoints } from './MaterialUI/Breakpoints';

import Navbar from './components/Navbar';
import Herobanner from './components/Herobanner';
import Services from './components/Services';
import Work from './components/Work';
import './assets/css/Main.css';

const App = () => {
  return (
    <ThemeProvider theme={customBreakPoints}>
      <Box>
        <Navbar />
        <Herobanner/>
        <Services/>
        <Work/>
        {/* <Typography
        sx={{
          fontSize:{lg:'10rem',xs:'5rem'},
          color:{lg:'green',xs:'orange'},

        }}>Hello World</Typography> */}
      </Box>
    </ThemeProvider> 
  )
}

export default App;