import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBuy from './ButtonBuy';
import ButtonAddToCard from './ButtonAddToCard';

interface CardProps{
  img: string,
  name: string,
  content: string,
}

export default function ImgMediaCard({img, name, content}: CardProps) {
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="170"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><ButtonBuy text='COMPRAR'/></Button>
        <Button size="small"><ButtonAddToCard text='+CARRINHO'/></Button>
      </CardActions>
    </Card>
  );
}
