"use client";

import { useEffect, useState } from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Container, Text, TextBold, Title2 } from "@/globalStyles";
import { EventContainer, EventContent, EventImage, Infos } from "./event.style";
import Image from "next/image";

export default function EventPage(props) {
  const [event, setEvent] = useState([]);

  async function getEvent() {
    await fetch(
      `http://localhost/BonnaParty/src/api/registerEvent.php?id=${props.value}`,
      {
        method: "GET",
      }
    )
      .then((events) => events.json())

      .then((json) => setEvent(json))
      .catch((err) => console.log(err));

    console.log(event);
  }

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <Container>
      <EventContainer>
        <EventContent>
          <Title2>{event.name}</Title2>
          <Text>
            {new Date(event.date).toLocaleDateString()} -{" "}
            {new Date(event.date).toLocaleTimeString()}
          </Text>
          <Infos>
            <TextBold>Descrição:</TextBold>
            <text>{event.description}</text>
          </Infos>
          <Infos>
            <TextBold>Localização:</TextBold>
            <text>
              {event.cep}, {event.street}, {event.number}
              <br />
              {event.hood}, {event.city}, {event.state}
            </text>
          </Infos>
        </EventContent>
        <EventImage>
          <Image
            style={{ width: "100%", height: "100%" }}
            width={1500}
            height={1500}
            src={`/images/${event.image_path}`}
            alt={event.name}
          />
        </EventImage>
      </EventContainer>
    </Container>
  );
}
