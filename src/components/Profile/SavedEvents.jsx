import { Content , Line , LineTitle } from "@/styles/profileCards.style"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { MainContainer, CardDiv } from '../../styles/Main.styled'

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



];

export default function SavedEvents() {
    return (

        <Content>
            <Line>
                <LineTitle>
                    Eventos Salvos
                </LineTitle>
            </Line>
            <MainContainer>

{events.map((event , i) => (
    <CardDiv key={i}>

        <Card sx={{ maxWidth: 345 }} >

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

        </Content>


    )
}