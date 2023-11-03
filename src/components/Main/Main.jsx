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
import { MainContainer, CardDiv } from "../../styles/Main.styled";


function Main() {
  
  const [events , setEvents] = React.useState([])
  
  async function getEvents() {
    await fetch("http://localhost/BonnaParty/src/api/registerEvent.php", {
      method: "GET",
    })
      .then((events) => events.json())
      .then((json) => setEvents(json.map(e => e)))
      .catch((err) => console.log(err));
      console.log(events)
    }
    
    React.useEffect(() => {
      getEvents();
  }, []);

  
  return (
    <MainContainer>
           {events.map((event, i) => (
        <CardDiv key={i}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {event.name[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={event.name}
              subheader={event.date}
            />
            <CardMedia
              component="img"
              height="300"
              image={`assets/image1.jpeg`}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {event.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="Contato">
                <WhatsAppIcon />
              </IconButton>
            </CardActions>
          </Card>
        </CardDiv>
      ))}
    </MainContainer>
  );
}

export default Main;
