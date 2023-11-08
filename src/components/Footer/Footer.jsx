"use-client";
import * as React from "react";
import {
  FooterContainer,
  FooterLinks,
  FooterIconContainer,
  ContentWrapper,
} from "./Footer.styles"; // Certifique-se de ter estilos e componentes necessários
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <Image src={'/assets/white_logo.png'} width={0} height={0} sizes="100" alt="BonnaParty" style={{width:130, height:'auto'}}/>
        <FooterIconContainer>
          <h3>Nossas redes sociais</h3>
          <div className="icons">
            <PhoneIcon />
            <MailIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </FooterIconContainer>
      </ContentWrapper>

      <Typography variant="body2" align="center" color="textSecondary">
        Todos os direitos reservados para BonnaParty &copy;{" "}
        {new Date().getFullYear()}
      </Typography>
    </FooterContainer>
  );
}
