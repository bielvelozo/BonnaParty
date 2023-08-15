'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { MainContainer , CardDiv } from './Main.styled'


const events = [
    {
      name: "Juliana",
      date: "2023-08-15",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante a libero auctor congue."
    },
    {
      name: "Gustavo",
      date: "2023-08-16",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dui ut dolor gravida vulputate."
    },
    {
      name: "Camila",
      date: "2023-08-17",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique euismod lacus, ac egestas velit venenatis ac."
    },
    {
        name: "Amanda",
        date: "2023-08-18",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel aliquet arcu, sit amet fringilla tortor."
      },
      {
        name: "Ricardo",
        date: "2023-08-19",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla urna nec ligula volutpat, at sollicitudin dui luctus."
      },
      {
        name: "Bianca",
        date: "2023-08-20",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu ut ligula tincidunt dapibus."
      }

    
  ];
function Main() {

    return (
        <MainContainer>

            { events.map(event => (
                <CardDiv>

                <Card sx={{ maxWidth: 345}} key={event}>
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
                    image="/assets/Evento1.png"
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
    )
}

export default Main