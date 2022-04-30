import * as React from "react";
import { styled } from "@mui/material/styles";
// for appbar:
import Badge from "@mui/material/Badge";
// for Search ({ styled, alpha }) (inside appbar):
import { alpha } from "@mui/material/styles";
// import SearchIcon from "@mui/icons-material/Search";
import { Search } from "react-iconly";
import InputBase from "@mui/material/InputBase";
import Switch from "@mui/material/Switch";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
//import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Notification, Setting } from "react-iconly";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import VideoLibraryTwoToneIcon from "@mui/icons-material/VideoLibraryTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsApplicationsTwoTone";
import Logout from "@mui/icons-material/Logout";

// color
import { pink, red, green, yellow, blue } from "@mui/material/colors";

// for appbar's avatar's badge:
const OnlineBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}));

// Search bar:
const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  borderRadius: "12px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(entykeytheme.palette.common.white, 0.25)
    //backgroundColor: "blueviolet",
    //color: "#fff"
  },
  border: "1px solid #e3e9ed",
  color: "grey",
  // borderColor has no damn effect !
  //borderColor: (theme) =>
  //    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
  // height: "40px"
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit", // make input color a bit transparent
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  "&.Mui-focused": {
    //borderWidth: "2px",
    color: "coral",
    border: "2px solid #612570",
    borderColor: "#612570",
    borderRadius: "12px",
    zIndex: 10
  }
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2
  }
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* By seperating AppBar(Header),
   from now Mui Switches no longer trigger
    the same variable (state) :< */
  const [fullWidth, setFullWidth] = React.useState(true);
  /*const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  }; */

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      {/* <ThemeProvider theme={entykeytheme}> */}
      <AppBar
        position="fixed"
        sx={{
          //zIndex: 99,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#fff",
          color: "blueviolet",
          boxShadow: "none",
          borderBottom: "1px solid #e3e9ed"
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MUI app
          </Typography>

          <SearchBox
            sx={{
              flexGrow: 0 // 0 for low width, 1 for wider
            }}
          >
            <SearchIconWrapper>
              {/* <SearchIcon /> */}
              <Search
                set="light"
                // primaryColor="#700A31"
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchBox>

          {/* make the rest of the tool bar elms go to flex right: */}
          <Box sx={{ flexGrow: 1 }} />

          <FormGroup>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1, ml: 5 }}
                  checked={fullWidth}
                  onChange={handleFullWidthChange}
                  defaultChecked
                />
              }
              // label="Dark Mode"
            />
          </FormGroup>

          <Tooltip
            title="🔥 Notification"
            placement="bottom"
            enterDelay={100}
            leaveDelay={100}
          >
            <Box
              sx={{
                color: "white"
              }}
            >
              <IconButton>
                {/* <NotificationsTwoToneIcon
                      fontSize="small"
                      style={{ color: "white" }}
                    /> */}
                <Notification
                  set="light"
                  // primaryColor="blueviolet"
                />
              </IconButton>
            </Box>
          </Tooltip>

          <Tooltip title="settings">
            {/* <Setting set="light" primaryColor="blueviolet" /> */}
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Setting
                set="light"
                //  primaryColor="blueviolet"
              />
            </IconButton>
          </Tooltip>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="🚀 Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <OnlineBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  {/* remove the T letter to show default person icon */}
                  {/* <Avatar sx={{ width: 32, height: 32 }}>T</Avatar> */}
                  <Avatar
                    alt="Nguyễn Hữu Anh Tuấn"
                    // src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/269746037_1512403742463899_8450139485538704242_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=x78D3Qcs9lgAX-afdMd&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_qE77TNbICBVtnVgqD4zFmNDxy4SKOEQmOZnYAjxpx2A&oe=625A4411"
                    // src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/881f9db0-c2c7-4b02-9fa8-1d6ac1a5a474/d79474v-10e701dd-dbe1-4868-9778-a5e9e96dc78b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4MWY5ZGIwLWMyYzctNGIwMi05ZmE4LTFkNmFjMWE1YTQ3NFwvZDc5NDc0di0xMGU3MDFkZC1kYmUxLTQ4NjgtOTc3OC1hNWU5ZTk2ZGM3OGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2EL4LcuFpxC0V5T_5wi625afLYsUHQJCXPHH3pjLVoo"
                    src="https://64.media.tumblr.com/984e8d0488ec8deed1447775ef84321a/tumblr_n8xn3cgt4V1qd4l2fo1_640.gif"
                    sx={{ width: 32, height: 32 }}
                  />
                </OnlineBadge>
              </IconButton>
            </Tooltip>

            {/* The Menu is placed after the parent component with "onClick" prop */}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem sx={{ ml: 1, mr: 1 }}>
                <ListItemIcon>
                  <ContactPageTwoToneIcon fontSize="medium" color="warning" />
                </ListItemIcon>
                Profile settings
              </MenuItem>
              {/* </Box> */}

              {/* <MenuItem>
          <Avatar color="secondary" /> My account
        </MenuItem> */}

              <Divider />

              <MenuItem sx={{ mt: 1, ml: 1, mr: 1 }}>
                <ListItemIcon>
                  <DarkModeTwoToneIcon fontSize="medium" color="secondary" />
                </ListItemIcon>
                Display & accessibility
              </MenuItem>
              <MenuItem sx={{ ml: 1, mr: 1 }}>
                <ListItemIcon>
                  <SettingsTwoToneIcon
                    fontSize="medium"
                    sx={{ color: blue[500] }}
                  />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem sx={{ ml: 1, mr: 1 }}>
                <ListItemIcon>
                  <FavoriteTwoToneIcon sx={{ color: pink[500] }} />
                </ListItemIcon>
                Favorite
              </MenuItem>
              <MenuItem sx={{ ml: 1, mr: 1 }}>
                <ListItemIcon>
                  <WatchLaterTwoToneIcon sx={{ color: yellow[800] }} />
                </ListItemIcon>
                Watch later
              </MenuItem>
              <MenuItem sx={{ ml: 1, mr: 1 }}>
                <ListItemIcon>
                  <VideoLibraryTwoToneIcon sx={{ color: green[500] }} />
                </ListItemIcon>
                Your uploaded videos
              </MenuItem>
              <MenuItem
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#F08080";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#fff";
                  e.target.style.color = "black";
                }}
                sx={{ ml: 1, mr: 1 }}
              >
                <ListItemIcon>
                  <Logout sx={{ color: red[600] }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
};
export default Header;
