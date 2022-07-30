import React from 'react';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Herobanner from './components/Herobanner';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

import './assets/css/Main.css';

const App = () => {
  return (
      <Box>
        <Navbar />
        <Herobanner/>
        <Services/>
        <Work/>
        <Contact/>
      </Box>
  )
}

export default App;