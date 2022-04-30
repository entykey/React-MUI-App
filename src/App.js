import * as React from "react";
import "./styles.css"; // hide webkit scrollbar ...
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import StandardImageList from "./Pages/ImageList";
import DetailUser from "./Pages/DetailUser";
import ClientTime from "./components/ClientTime";
// import { SortFilter } from "./components/SortFilter";
// import { makeStyles } from "@material-ui/core";

import Toolbar from "@mui/material/Toolbar"; // for keeping sapce between appbar & contents beneath
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { orange, deepPurple } from "@mui/material/colors";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// create customed theme for entire page (will overide all color where it was applied !!!):
const entykeytheme = createTheme({
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

//const drawerWidth = 240;

export default function App() {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={entykeytheme}>
        {/* Outside container box: */}
        <Box
          sx={{
            display: "flex",
            //flexDirection: "column",
            background: "#fafafa"
          }}
        >
          <CssBaseline />

          {/* Header (AppBar here): */}
          <Header />

          {/* SideBar here: */}
          <SideBar />

          {/* Content box (all content pages wrapped inside this box): */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              background: "#fafafa",
              p: 3
            }}
          >
            <Toolbar />
            {/* ToolBar make AppBar(Header) keep space with elements beneath it !IMPORTANT ! */}

            {/* ClientTime clock here: */}
            <ClientTime />

            {/* NO NEED to call BrowserRouter here ! as we called it in index.js page */}
            {/* <BrowserRouter> */}

            <Routes>
              <Route index element={<Home />} />
              <Route path="/Page1" element={<Page1 />} />
              <Route path="/ImageList" element={<StandardImageList />} />
              {/* <Route exact path="/user" element={ListUser} /> */}
              <Route path="/user/detail/:id" element={DetailUser} />
            </Routes>
            {/* </BrowserRouter> */}
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}
