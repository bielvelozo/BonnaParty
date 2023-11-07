"use client";

import * as React from "react";

import {
  HeaderImage,
  HeaderWrap,
  ImageDiv,
  StyledHeader,
} from "../../styles/header.style.jsx";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";
import FormUser from "../FormUser/FormUser.jsx";
import { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link.js";
import { Container } from "@/globalStyles.js";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setShow(localStorage.getItem("id") > 0);
    setAvatar(localStorage.getItem("name") && localStorage.getItem("name")[0]);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLogin(true);

    return false;
  };

  const handleProfile = (e) => {
    e.preventDefault();
    location.replace("/profile/ChangeEmail");
    return false;
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <StyledHeader>
        <Container style={{ height: "100%" }}>
          <AppBar
            sx={{ background: "#fff", boxShadow: "none", color: "#000" }}
            position="static"
          >
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    Explorar Eventos
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href={"/Cadastrar-Evento"}>Cadastrar Eventos</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    Central de Ajuda
                  </MenuItem>
                </Menu>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="span"
                href="/"
                sx={{
                  mr: 2,

                  flexGrow: 1,
                  alignSelf: "flex-end",
                }}
              >
                <Link href={"/"}>
                  <HeaderImage>
                    <Image
                      src={"/assets/white_logo.png"}
                      width={0}
                      height={0}
                      sizes="100%"
                      alt="BonnaParty logo"
                    />
                  </HeaderImage>
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <MenuItem onClick={handleCloseNavMenu}>
                <Link href={"/Explorar-Eventos"}>Explorar Eventos</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href={"/Cadastrar-Evento"}>Cadastrar Evento</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  Central de Ajuda
                </MenuItem>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={show ? "Visitar Perfil" : "Fazer Login"}>
                  <IconButton
                    onClick={show ? handleProfile : handleLogin}
                    size="small"
                    sx={{ ml: 2 }}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      {avatar && avatar}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))} */}
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
      </StyledHeader>

      {showLogin && <FormUser show={showLogin} set={setShowLogin} />}
    </>
  );
}

export default Header;
