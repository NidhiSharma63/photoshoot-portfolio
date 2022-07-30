import React from 'react';
import { Box,ThemeProvider } from '@mui/material';
import { customBreakPoints } from './MaterialUI/Breakpoints';

import Navbar from './components/Navbar';
import Herobanner from './components/Herobanner';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

import './assets/css/Main.css';

const App = () => {
  return (
    <ThemeProvider theme={customBreakPoints}>
      <Box
      className='main-wrapper'>
        <Navbar />
        <Herobanner/>
        <Services/>
        {/* <Work/> */}
        <Contact/>
      </Box>
    </ThemeProvider> 
  )
}

export default App;