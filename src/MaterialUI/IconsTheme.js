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


export const crossIcon = createTheme({
  components:{
    MuiSvgIcon:{
      styleOverrides:{
        root:{
          color:'var(--color-white)',
          fontSize:'50px',
          border:'1px solid var(--btn-border-color)',
          borderRadius:'50%',
          padding:'10px',
          cursor:'pointer',
          transition:'all 0.3s ease',
          '&:hover':{
            backgroundColor:'var(--bg-color-light)',
            color:'var(--secondary-color)',
          }
        }
      },
    },
  },
});

export const menuIcon = createTheme({
  components:{
    MuiSvgIcon:{
      styleOverrides:{
        root:{
          color:'var(--color-white)',
          fontSize:'29px',
          '&:hover':{
            color:'var(--secondary-color)',
          },

          // adding media query material-ui
          [theme.breakpoints.between('sm','xl')]:{
            fontSize:'34px'
          },
        }
      }
    }
  }
});

export const socialIconTheme = createTheme({
  components:{
    MuiSvgIcon:{
      styleOverrides:{
        root:{
          cursor:'pointer',
          fontSize:'33px',
          color:'var(--secondary-color)',
          border:'1px solid var(--secondary-color)',
          padding:'6px',
          borderRadius:'50%',
          background: 'var(--bg-color-dark)',

          // adding media query material-ui
          [theme.breakpoints.between('sm','xl')]:{
            fontSize:'50px',
            padding:'10px',
          },
        }
      }
    }
  }
});