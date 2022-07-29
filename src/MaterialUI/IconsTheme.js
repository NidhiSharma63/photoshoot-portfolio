import { createTheme } from "@mui/material";

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
          }
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
          // transition: 'all 0.3s ease-in-out',
          // '&:hover':{
          //   background: 'var(--color-white)',
          //   color:'var(--bg-color-light)',
          // }
        }
      }
    }
  }
});