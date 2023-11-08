"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MainContainer, CardDiv, MainTitle } from "../../styles/Main.styled";
import { Button } from "@mui/material";
import Link from "next/link";
import { Container } from "@/globalStyles";

function Main() {
  const [events, setEvents] = React.useState([]);

  async function getEvents() {
    await fetch("http://localhost/BonnaParty/src/api/registerEvent.php", {
      method: "GET",
    })
      .then((events) => events.json())
      .then((json) => setEvents(json.map((e) => e)))
      .catch((err) => console.log(err));
    console.log(events);
  }

  React.useEffect(() => {
    getEvents();
  }, []);

  return (
    <Container style={{paddingBottom:'3rem'}}>
      <MainTitle>Conheça novos eventos</MainTitle>
      <MainContainer>
        {events.map((event, i) => (
          <CardDiv key={i}>
            <Card sx={{ width: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={`/images/${event.image_path}`}
                alt="Paella dish"
              />
              <CardContent sx={{ height: 110 }}>
                <Typography
                  sx={{ fontSize: 20 }}
                  component="div"
                  color="text.secondary"
                >
                  {event.name}
                </Typography>
                <Typography
                  sx={{ marginTop: 1 }}
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  {event.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
                  Compartilhar
                </Button>
                <Link href={`Eventos/${event.id}`}>
                  <Button variant="outlined" size="small">
                    Saiba Mais
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </CardDiv>
        ))}
      </MainContainer>
    </Container>
  );
}

export default Main;
