
import { createTheme } from "@mui/material";
// these are min widths for different screen sizes
export const customBreakPoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      xmd:800,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
});