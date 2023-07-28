
import { Box, Typography, Container, styled } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import logoImg from "../media/logo.png";
import CustomButton from "../components/CustomButton";
const Navbar = () => {
  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "none",

    "&:hover": {
      color: "#0F1B4C",
      display: "block",
      backgroundColor: "#fff",
      borderColor: "#0F1B4C",
      padding: "0.5rem 1.25rem",
      borderRadius: "7px",
      border: "2px solid transparent",
    },
  }));
  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display:"block",
    },
  }));
  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems:"center",
    justifyContent:"space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]:{
      padding: theme.spacing(2),
    },
  }));
  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]:{
      display: "none",
    },
  }));

  return <NavbarContainer>
    <Box 
      sx={{
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
        gap: "2.5rem",
      }}
    >
      <Box 
      sx={{
        display:"flex",
        alignItems:"center",
      }}>
        <CustomMenuIcon />
        <NavbarLogo src={logoImg} alt="logo" />
      </Box>
      <NavbarLinksBox>
        <NavLink variant="body2">Home</NavLink>
        <NavLink variant="body2">Features</NavLink>
        <NavLink variant="body2">Services</NavLink>
        <NavLink variant="body2">Listed</NavLink>
        <NavLink variant="body2">Contact</NavLink>
      </NavbarLinksBox>
    </Box>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"}}> 
      <NavLink variant="body2">Sign Up</NavLink>
      <CustomButton 
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="Register"
      
      />
    </Box>
  </NavbarContainer>;
};

export default Navbar;
