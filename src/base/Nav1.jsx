import React, { useState , useEffect} from "react";
import { RoutePath } from "./context";
import { NavLink,useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SettingsIcon from "@mui/icons-material/Settings";
import InputIcon from "@mui/icons-material/Input";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import RestaurantIcon from "@mui/icons-material/Restaurant";


const Title = styled(Typography)({
  flexGrow: 1,
});
const DrawerWrapper = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "300px",
    marginTop: "69px",
  },
});
const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
});

function Header() {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [settingDrawerOpen, setSettingDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('md'));

 const handleSettingPoen = () => {
   setSettingDrawerOpen(true);
 };
 const handleSettingClose = () => {
   setSettingDrawerOpen(false);
 };
  const handleLeftDrawerOpen = () => {
    setLeftDrawerOpen(true);
  };

  const handleLeftDrawerClose = () => {
    setLeftDrawerOpen(false);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    handleLeftDrawerClose();
  };
  useState(() => {
    setActiveLink();
  },[]);


  
  return (
    <>
      <AppBar className="header" position="fixed" sx={{ backgroundColor: "rgba(300, 0, 0, 0.8)", padding: "0px",elevation: 4}}>
        <Toolbar>
        <RestaurantIcon className="ri" sx={{color:"silver",zIndex:"20",fontSize:"30px"}}/>
            <Title variant="h6" component="div" sx={{fontFamily:"cursive",fontWeight:"900",fontSize:"25px"}}>
              Food Bite
            </Title>
        {!isMobile && (
        <List sx={{display:"flex",flexDirection:"row" }}>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Home)}
            component={NavLink}
            to={RoutePath.Home}
            sx={{
              margin: "2px",
              // backgroundColor:
              //   activeLink === RoutePath.Home ? "yellow" : "inherit",
              color: activeLink === RoutePath.Home ? "yellow" : "inherit",
              borderRadius:"10px",
              textDecoration: activeLink === RoutePath.Home ? "underline" : "none",
              textDecorationThickness: "3px", // Adjust thickness as needed
              textDecorationSkipInk: "none", 
            }}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.AboutUs)}
            component={NavLink}
            to={RoutePath.AboutUs}
            sx={{
              margin: "2px",
              color: activeLink === RoutePath.AboutUs ? "yellow" : "inherit",
              borderRadius:"10px",
              textDecoration: activeLink === RoutePath.AboutUs ? "underline" : "none",
              textDecorationThickness: "3px", // Adjust thickness as needed
              textDecorationSkipInk: "none", 
            }}
          >
          
            <ListItemText primary="AboutUs" />
          </ListItem>
        </List>
        )}
          {/* Show menu icon only in mobile view */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleLeftDrawerOpen}
            sx={{ display: { sm: "block", md: "none" } }} // Hide on md and above
          >
            <MenuIcon />
          </IconButton>
          <SettingsIcon
            sx={{ marginLeft: "30px", fontSize: "30px" }}
            onClick={handleSettingPoen}
          />
        </Toolbar>
      </AppBar>
      <div className="shadow-line"></div>
      <DrawerWrapper anchor="left" open={leftDrawerOpen} onClose={handleLeftDrawerClose}>
        <DrawerHeader sx={{ backgroundColor: "rgba(300, 0, 0, 0.8)", color: "white" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            MENU
          </Typography>
          <IconButton onClick={handleLeftDrawerClose} sx={{ color: "white" }}>
            <ArrowBackIosIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.Home)}
            component={NavLink}
            to={RoutePath.Home}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.Home ? "red" : "inherit",
                color: activeLink === RoutePath.Home ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <HomeIcon
                sx={{
                  color: "violet",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => handleLinkClick(RoutePath.AboutUs)}
            component={NavLink}
            to={RoutePath.AboutUs}
            sx={{
              margin: "4px",
              backgroundColor:
                activeLink === RoutePath.AboutUs ? "red" : "inherit",
              color: activeLink === RoutePath.AboutUs ? "yellow" : "inherit",
            }}
          >
            <ListItemIcon>
              <InputIcon
                sx={{
                  color: "red",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="AboutUs" />
          </ListItem>
        </List>
      </DrawerWrapper>
     
    </>
  );
}

export default Header;