"use client";

import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { ExploreContainer, ExploreWrap } from "./ExploreEvent.styles";
import { CardDiv, MainContainer } from "@/styles/Main.styled";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function ExploreEvent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  async function getEvents() {
    try {
      const response = await fetch(
        "http://localhost/BonnaParty/src/api/registerEvent.php",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setEvents(data.map((e) => e));
      setFilteredEvents(data.map((e) => e)); // Inicialmente, exibe todos os eventos
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    // Atualiza os eventos filtrados com base na pesquisa
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchQuery, events]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Atualiza os eventos filtrados com base na pesquisa
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <ExploreContainer>
      <ExploreWrap>
        <form style={{width:'100%', textAlign: 'center'}}>
          <TextField
            id="search-bar"
            className="text"
            value={searchQuery}
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
            label="Digite o nome do evento"
            variant="outlined"
            placeholder="Nome do evento"
            size="large"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              width: {xs:'100%' , md:500 , lg:600},
              margin:'0 auto'
            }}
          />
        </form>
      </ExploreWrap>
      <MainContainer style={{ marginTop: "2.5rem", justifyContent:'center', rowGap: '2rem' }}>
        {filteredEvents.length >= 1 ? (
          filteredEvents.map((event, i) => (
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
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                  >
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
          ))
        ) : (
            <Typography style={{textAlign:'center' , marginBottom:50}} variant="h3" component={"h1"}>{`NENHUM EVENTO ENCONTRADO :(`}</Typography>
        )}
      </MainContainer>
    </ExploreContainer>
  );
}
