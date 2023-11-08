"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import WhatsApp from "@mui/icons-material/WhatsApp";

export default function HelpCenter() {
  return (
    <div
      style={{
        padding: "3rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Dúvidas Frequentes
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Como posso criar um evento?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para criar um evento, primeiro faça login na sua conta ou faça o
              cadastro. Em seguida, navegue até a seção de criação de eventos e
              siga as instruções para adicionar os detalhes do seu evento.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Como faço para ter um banner na página principal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para ter um Banner em nosso carrosel de banners na página
              principal, basta entrar em contato com o número disponível nesta
              página de Central de Ajuda e falar que deseja ter seu evento em um
              banner de destaque.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>
              Como posso entrar em contato com o organizador do evento?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para entrar em contato com um organizador de um anúncio
              específico, vá para a página do evento e procure as informações de
              contato fornecidas pelo anúncio.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>
              É possível comprar ingressos diretamente no site?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Não, neste site, não é possível comprar ingressos diretamente. A
              plataforma permite a criação e divulgação de eventos
              gratuitamente, mas para adquirir ingressos, você precisará entrar
              em contato diretamente com o vendedor ou organizador do evento.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography>
              Como posso promover meu evento para alcançar mais pessoas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para promover seu evento, você pode compartilhar o link do evento
              em suas redes sociais, convidar amigos e pedir que compartilhem
              também. Além disso, você pode utilizar ferramentas de marketing
              digital, como anúncios pagos em plataformas de mídia social, para
              alcançar um público mais amplo.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div
        style={{
          marginTop: "3rem",
          textAlign: "center",
        }}
      >
        <h1>Não encontrou ajuda que precisa?</h1>
        <div style={{ marginTop: "1rem" }}>
          <h3 style={{ marginBottom: "1rem", fontWeight:500 }}>
            Teremos prazer e sanar todas suas dúvidas
          </h3>

          <Button 
          sx={{backgroundColor:'#000' }}
          variant="contained" 
          color="success"
          endIcon={<WhatsApp />}
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=5516991115489', '_blank')}
          >
            Entrar em Contato
          </Button>
        </div>
      </div>
    </div>
  );
}
