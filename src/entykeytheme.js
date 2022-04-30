import {
  //pink,
  //red,
  //green,
  //yellow,
  orange,
  deepPurple
  //blue
} from "@mui/material/colors";
import {
  createTheme
  //ThemeProvider,
  //styled
} from "@mui/material/styles";

// create customed theme for entire page (will overide all color where it was applied !!!):
export const entykeytheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      // main: "#f44336"
      main: deepPurple[500]
    }
  },
  status: {
    danger: orange[500]
  },

  // all shape(including MuiButton):
  // shape: {
  //   borderRadius: 8,
  // },

  components: {
    // overide in MUI v5: !!
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px"
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          minHeight: 50
        }
      }
    }
  }
});
