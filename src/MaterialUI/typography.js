import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

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

export const SubHeadingDetailsTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          textAlign: 'center',
          lineHeight: '1.7',
          fontSize: '13px',
          width: '100%',
          fontFamily: 'var(--font-family-worksans)',
          fontWeight: 'var(--fw-light)',
          letterSpacing: '2px',
          color: 'var(--color-white)',
        }
      }
    }
  }
});


export const headingTheme = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          textAlign: 'center',
          fontSize: '35px',
          fontFamily: 'var(--font-family-Berkshire)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2px',
          color: 'var(--color-white)',
          position: 'relative',
          '&::after':{
            content: '""',
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--secondary-color)',
            margin: 'auto',
            marginTop: '5px',
            borderRadius: '50%',
          },
          [theme.breakpoints.between('sm','xl')]:{
            fontSize:'45px'
          },
        }
      }
    }
  }
});

export const SubHeadingTypoTheme = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize:'28px',
          fontFamily: 'var(--font-family-Berkshire)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2.2px',
          color: 'var(--secondary-color)',
          marginBottom: '10px',
          [theme.breakpoints.between('sm','xl')]:{
            fontSize:'35px'
          },
        }
      }
    }
  }
});

export const SkillsDetailsTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize:'17px',
          fontFamily: 'var(--font-family-worksans)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '1px',
          color: 'var(--light-whiteColor)',
          [theme.breakpoints.between('sm','xl')]:{
            fontSize:'25px'
          },
        }
      }
    }
  }
});
