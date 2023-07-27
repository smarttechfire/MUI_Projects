import styled from "@emotion/styled";
import { Box, Typography, Container } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
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
    marginRight: theme.spacing,
  }));
  const NavbarContainer = styled(Container)(({ theme }) => ({}));
  const NavbarLogo = styled("img")(({ theme }) => ({}));

  return <></>;
};

export default Navbar;
