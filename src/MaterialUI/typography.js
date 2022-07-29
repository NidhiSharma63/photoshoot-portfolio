import { createTheme } from "@mui/material";

export const logoTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--font-family-Merriweather)',
          fontWeight: 'var(--fw-bold)',
          letterSpacing: '2px',
          fontSize: '32px',
          color: 'var(--secondary-color)',
        }
      }
    }
  }
});

export const heroTypography1 = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize: '35px',
          fontFamily: 'var(--font-family-lobster)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2px',
          color: 'var(--color-white)',
        }
      }
    }
  }
});

export const heroTypography2 = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          lineHeight: '1.7',
          fontSize: '12px',
          fontFamily: 'var(--font-family-Merriweather)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2px',
          color: 'var(--color-white)',
        }
      }
    }
  }
});

export const HeroSubHeadingTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize:'20px',
          fontFamily: 'var(--font-family-worksans)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2px',
          color: 'var(--light-whiteColor)',
        }
      }
    }
  }
});


export const sectionHedingTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--font-family-Merriweather)',
          fontWeight: 'var(--fw-light)',
          letterSpacing: '1px',
          color: 'var(--color-white)',
        }
      }
    }
  }
})


export const errorTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          color:'red',
          letterSpacing:'1.6px',
          marginLeft:'10px',
          marginTop: '-20px',
          marginBottom: '-21px',
        }
      }
    }
  }
})