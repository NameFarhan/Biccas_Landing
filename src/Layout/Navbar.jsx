import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavbarWrapper } from "../Components/NavbarWrapper";

const Navbar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <NavbarWrapper>
        <AppBar
          position="static"
          color="transparent"
          sx={{ boxShadow: "none" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Typography
              variant="p"
              component="div"
              sx={{
                fontWeight: "800",
                fontSize: {
                  mobile: "30px",
                  tablet: "36px",
                  laptop: "46px",
                  desktop: "50px",
                },
                color: "#54BD95",
                position: {
                  tablet: "relative",
                },
                bottom: {
                  tablet: "3px",
                  laptop: "5px",
                  desktop: "7px",
                },
              }}
            >
              Biccas
            </Typography>

            {/* Navigation Buttons */}
            <Box
              sx={{
                display: {
                  mobile: "none",
                  tablet: "flex",
                },
                gap: 2,
              }}
            >
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "#A6A6A6",
                  fontSize: { mobile: "16px", tablet: "15px", laptop: "16px" },
                  "&:hover": {
                    color: "#000",
                    bgcolor: "transparent",
                  },
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "#A6A6A6",
                  fontSize: { mobile: "16px", tablet: "15px", laptop: "16px" },
                  "&:hover": {
                    color: "#000",
                    bgcolor: "transparent",
                  },
                }}
              >
                About
              </Button>
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "#A6A6A6",
                  fontSize: { mobile: "16px", tablet: "15px", laptop: "16px" },
                  "&:hover": {
                    color: "#000",
                    bgcolor: "transparent",
                  },
                }}
              >
                Services
              </Button>
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "#A6A6A6",
                  fontSize: { mobile: "16px", tablet: "15px", laptop: "16px" },
                  "&:hover": {
                    color: "#000",
                    bgcolor: "transparent",
                  },
                }}
              >
                Portfolio
              </Button>
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "#A6A6A6",
                  fontSize: { mobile: "16px", tablet: "15px", laptop: "16px" },
                  "&:hover": {
                    color: "#000",
                    bgcolor: "transparent",
                  },
                }}
              >
                Contact
              </Button>
            </Box>

            {/* Hamburger Menu for Mobile */}
            <Box
              sx={{
                display: {
                  mobile: "block",
                  tablet: "none",
                },
              }}
            >
              <IconButton
                sx={{
                  padding: "0",
                  position: {
                    mobile: "relative",
                  },
                  left:{
                    mobile:'4px'
                  }
                }}
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon sx={{ fontSize: 30, color: "#54BD95" }} />
              </IconButton>
            </Box>

            {/* Login and Signup Buttons */}
            <Box
              sx={{
                display: {
                  mobile: "none",
                  tablet: "flex",
                },
                gap: 1,
                position: {
                  mobile: "relative",
                  tablet: "unset",
                },
                top: {
                  mobile: "4px",
                },
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  color: "#A6A6A6",
                  "&:hover": {
                    color: "#000",
                    bgcolor: "transparent",
                  },
                  fontSize: {
                    mobile: "16px",
                    tablet: "15px",
                    laptop: "16px",
                  },
                }}
                variant="text"
              >
                Login
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#54BD95",
                  boxShadow: "0",
                  textTransform: "none",
                  borderRadius: "10px",
                  width: "80px",
                  height: "40px",
                  fontSize: {
                    mobile: "16px",
                    tablet: "18px",
                  },
                }}
              >
                Signup
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </NavbarWrapper>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: "200px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#54BD95" }}
          >
            Biccas
          </Typography>
          <IconButton sx={{ padding: "0" }} onClick={handleDrawerToggle}>
            <CloseIcon sx={{ padding: "0" }} />
          </IconButton>
        </Box>
        <List>
          {["Home", "About", "Services", "Portfolio", "Contact"].map((text) => (
            <ListItem button key={text}>
              <ListItemText
                primary={text}
                sx={{
                  textAlign: "center",
                  "& .MuiTypography-root": {
                    fontSize: "16px",
                    color: "#A6A6A6",
                    "&:hover": { color: "#000" },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
