"use client";

import * as React from "react";
import { Content, Line, LineTitle } from "@/styles/profileCards.style";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MainContainer, CardDiv } from "../../styles/Main.styled";
import { Button } from "@mui/material";
import Link from "next/link";

export default function SavedEvents() {
  const [localID, setLocalID] = React.useState("");

  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function getEvents() {
    try {
      const response = await fetch(
        `http://localhost/BonnaParty/src/api/registerEvent.php?user_id=${localID}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);

      setEvents(data.map(d => d));
      setLoading(false); 
    } catch (err) {
      console.error(err);
      setLoading(false); 
    }
  }

  React.useEffect(() => {
    const storedID = localStorage.getItem("id");
    if (storedID) {
      setLocalID(storedID);
    }
  }, []);

  React.useEffect(() => {
    if (localID) {
      getEvents();
    }
  }, [localID]);

  return (
    <Content>
      <Line>
        <LineTitle>Eventos Criados</LineTitle>
      </Line>
      <MainContainer>
        {loading ? (
          <p>carregando...</p>
        ) : events.length >= 1 ? (
          events.map((event, i) => (
            <CardDiv key={i}>
              <Card sx={{ width: { md: "345px", xs: "280px" } }}>
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
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                  >
                    Compartilhar
                  </Button>
                  {/* <Link href={`Eventos/${event.id}`}> */}
                    {/* <Button variant="outlined" size="small">
                      Saiba Mais
                    </Button>
                  </Link> */}
                </CardActions>
              </Card>
            </CardDiv>
          ))
        ) : (
          <h2>Nenhum evento registrado</h2>
        )}
      </MainContainer>
    </Content>
  );
}
