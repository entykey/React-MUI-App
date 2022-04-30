import * as React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
//import Typography from  "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// for music player:
/*import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SkipNextIcon from "@mui/icons-material/SkipNext";*/

import { makeStyles } from "@material-ui/core";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";

//import Typography from "@mui/material/Typography";

import {
  Plus,
  Home,
  //Notification,
  People,
  EditSquare,
  Heart2,
  Calendar
} from "react-iconly";
//import SuperCons from "supercons";

import openMessageBox from "../AntD/MessageBox";

// already declared in parent page !! :
const drawerWidth = 90; // 240

// custom css overiding functions for SideBar page:
const useStyles = makeStyles((theme) => ({
  sidebar: {
    //justifyContent: "space-between",
    //width: "150px",
    //display: "inline-block",
    width: "58px",
    height: "58px",
    transition: theme.transitions.create(["border-radius", "background-color"]),
    "&:hover": {
      // border: "1px solid #D1A5DD", // beautifully matched color border <3
      borderRadius: "18px", // 25% will make oval if there's text inside the obj that invole this class !!!
      backgroundColor: "#F5DBFB !important", // MUST have !important to overide the CSS !!!
      color: "#700A31", // purple text
      primaryColor: "#700A31"
    }
  },
  musicbar: {
    transition: theme.transitions.create(["border-radius", "background-color"]),
    "&:hover": {
      // border: "1px solid #D1A5DD", // beautifully matched color border <3
      borderRadius: "13px", // 25% will make oval if there's text inside the obj that invole this class !!!
      backgroundColor: "#F5DBFB !important", // MUST have !important to overide the CSS !!!
      color: "#700A31", // purple text
      primaryColor: "#700A31"
    }
  },
  // sidebar (drawer):
  drawer: {
    width: drawerWidth,
    flexShrink: 0
    //backgroundColor: "rgba(120,120,120,0.2)" Don't target here !
  },
  // customize drawer here !
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "white", //target here ! (whole drawer color)
    borderColor: "#e3e9ed", // drawer right side border...
    //overflow: "hidden",
    overflowY: "hidden",
    overflowX: "hidden", // hide the horizontal scrollbar
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <BrowserRouter> */}
      <Drawer
        variant="permanent"
        // apply custom styles :
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
      >
        <Toolbar />
        {/* <Box
          //  borderRight={1}
          //  borderColor="#e3e9ed"
          sx={{ overflow: "auto" }}
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <SuperCons glyph="plus" size={29} color="blueviolet" />
                  ) : (
                    // <MailIcon />
                    <Plus set="light" primaryColor="blueviolet" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box> */}

        <Divider />

        <Box>
          <List>
            <ListItem>
              <Tooltip
                title="Home"
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <IconButton
                  aria-label="Home"
                  className={classes.sidebar}
                  containerElement={<NavLink to="/" />}
                  linkButton={true}
                  onClick={openMessageBox}
                >
                  {/* <SkipPreviousIcon /> */}
                  {/* Note: set="bold" when is active route*/}
                  <Home
                    set="light"
                    // primaryColor="blueviolet"
                  />
                  {/* <Typography sx={{ ml: 2 }}>Home</Typography> */}
                </IconButton>
              </Tooltip>
            </ListItem>

            <ListItem>
              <Tooltip
                title="Team"
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <IconButton
                  aria-label="Team"
                  className={classes.sidebar}
                  containerElement={<NavLink to="/ImageList" />}
                  linkButton={true}
                  onClick={openMessageBox}
                >
                  {/* <ArrowLeftIcon /> */}
                  <People
                    set="light"
                    //  primaryColor="blueviolet"
                  />
                  {/* <Typography sx={{ ml: 2 }}>Teams</Typography> */}
                </IconButton>
              </Tooltip>
            </ListItem>

            <ListItem>
              <Tooltip
                title="Create"
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <IconButton
                  aria-label="create"
                  className={classes.sidebar}
                  containerElement={<NavLink to="/Page1" />}
                  linkButton={true}
                  onClick={openMessageBox}
                >
                  {/* <ArrowRightIcon /> */}
                  <EditSquare
                    set="light"
                    //  primaryColor="blueviolet"
                  />
                  {/* <Typography sx={{ ml: 2 }}>Create</Typography> */}
                </IconButton>
              </Tooltip>
            </ListItem>

            <ListItem>
              <Tooltip
                title="Scheduled"
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <IconButton
                  aria-label="next-end"
                  className={classes.sidebar}
                  onClick={openMessageBox}
                >
                  {/* <SkipNextIcon /> */}
                  <Calendar
                    set="light"
                    // primaryColor="blueviolet"
                  />
                  {/* <Typography sx={{ ml: 2 }}>Scheduled</Typography> */}
                </IconButton>
              </Tooltip>
            </ListItem>

            <ListItem>
              <Tooltip
                title="Favorites"
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <IconButton
                  aria-label="favorite"
                  className={classes.sidebar}
                  onClick={openMessageBox}
                >
                  {/* <SkipNextIcon /> */}
                  <Heart2
                    set="light"
                    // primaryColor="blueviolet"
                  />
                  {/* <Typography sx={{ ml: 2 }}>Favorites</Typography> */}
                </IconButton>
              </Tooltip>
            </ListItem>
            <ListItem>
              <Tooltip
                title="Add"
                placement="right"
                enterDelay={100}
                leaveDelay={100}
              >
                <IconButton
                  aria-label="Add"
                  className={classes.sidebar}
                  onClick={openMessageBox}
                >
                  {/* <SkipNextIcon /> */}
                  <Plus
                    set="light"
                    // primaryColor="blueviolet"
                  />
                  {/* <Typography sx={{ ml: 2 }}>Favorites</Typography> */}
                </IconButton>
              </Tooltip>
            </ListItem>

            <NavLink
              exact
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#8d6ec8" : "#a6dfde",
                borderLeft: isActive ? "4px solid #8d6ec8" : "none",
                textDecoration: "none",
                padding: "5px",
                margin: "5px"
              })}
            >
              Home
            </NavLink>
            <br />
            <NavLink
              exact
              to="/ImageList"
              style={({ isActive }) => ({
                color: isActive ? "#8d6ec8" : "#a6dfde",
                borderLeft: isActive ? "4px solid #8d6ec8" : "none",
                textDecoration: "none",
                padding: "5px",
                margin: "5px"
              })}
            >
              ImageList
            </NavLink>
            <br />
            <NavLink
              exact
              to="/Page1"
              style={({ isActive }) => ({
                color: isActive ? "#8d6ec8" : "#a6dfde",
                borderLeft: isActive ? "4px solid #8d6ec8" : "none",
                textDecoration: "none",
                padding: "5px",
                margin: "5px"
              })}
            >
              Page1
            </NavLink>
            <br />
            <NavLink
              exact
              to="/user/1"
              style={({ isActive }) => ({
                color: isActive ? "#8d6ec8" : "#a6dfde",
                borderLeft: isActive ? "4px solid #8d6ec8" : "none",
                textDecoration: "none",
                padding: "5px",
                margin: "5px"
              })}
            >
              /user/detail/1
            </NavLink>
          </List>
        </Box>

        {/* <Divider /> */}

        {/* <Box>
          <IconButton aria-label="previous-start" className={classes.musicbar}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="previous" className={classes.musicbar}>
            <ArrowLeftIcon />
          </IconButton>
          <IconButton aria-label="next" className={classes.musicbar}>
            <ArrowRightIcon />
          </IconButton>
          <IconButton aria-label="next-end" className={classes.musicbar}>
            <SkipNextIcon />
          </IconButton>
        </Box> */}
      </Drawer>
    </React.Fragment>
  );
};
export default SideBar;
