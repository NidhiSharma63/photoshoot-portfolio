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