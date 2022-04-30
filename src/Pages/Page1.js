import * as React from "react";
import { SortFilter } from "../components/SortFilter";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// AntDMenu:
import "antd/dist/antd.css";
import { Menu, Button, Switch } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from "@ant-design/icons";

const AntDMenu = () => {
  // AntD funcs:
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
    };
  }

  const items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("Option 3", "3", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8")
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12")
      ])
    ])
  ];

  const [theme, setTheme] = React.useState("dark");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: 256
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        //theme="dark"
        theme={theme}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

const Page1 = () => {
  return (
    <React.Fragment>
      {/* Content box here */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#fafafa"
        }}
      >
        {/* sort & filter box: */}
        <SortFilter />

        <Box sx={{ ml: 3 }}>
          <h4>Page1:</h4>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            m: 3,
            //mt: "90px",
            mt: 0.8,
            border: "1px solid",
            //bgcolor: (theme) =>
            //  theme.palette.mode === "dark" ? "#101010" : "grey.50",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "grey.300",
            borderRadius: 2,
            // backgroundColor: "rgba(120,120,120,0.2)",
            //boxShadow: "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px", // rainbow
            //boxShadow: "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px", // like dst3 web
            boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px"
            //boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <Toolbar />
          <AntDMenu />
          <Typography paragraph>Nothing to see here...</Typography>
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 }
              //boxShadow: "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px"
            }}
            alt="some img"
            src="https://64.media.tumblr.com/a71d4ba7efd4b30ed399af597bd1cafa/tumblr_mgsd2rQ67U1rlihsyo1_250.gif"
          />
          <Divider />
          <br />
          <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
              maxHeight: { xs: 300, md: 167 },
              maxWidth: { xs: 300, md: 250 },
              // boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
              boxShadow:
                "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
            }}
            alt="HuyenAhh"
            src="https://i.ibb.co/PF6Y0H9/avatar-Huyen-Ahh.jpg"
          />
          HuyenAhh
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default Page1;
