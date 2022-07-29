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

export const subHeadingTypoTheme = createTheme({
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
          }
        }
      }
    }
  }
});

export const ServicesTextSecondaryColor = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize:'30px',
          fontFamily: 'var(--font-family-Berkshire)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2.2px',
          color: 'var(--secondary-color)',
          marginBottom: '10px',
        }
      }
    }
  }
});


// export const ServicesTextWColor = createTheme({
//   components:{
//     MuiTypography:{
//       styleOverrides:{
//         root:{
//           fontSize:'20px',
//           fontFamily: 'var(--font-family-worksans)',
//           fontWeight: 'var(--fw-medium)',
//           letterSpacing: '2px',
//           color: 'var(--light-whiteColor)',
//         }
//       }
//     }
//   }
// });


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