import React from 'react';
import { Box,Typography,ThemeProvider } from '@mui/material';
import { customBreakPoints } from './MaterialUI/Breakpoints';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <ThemeProvider theme={customBreakPoints}>
      <Box>
        <Navbar />
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