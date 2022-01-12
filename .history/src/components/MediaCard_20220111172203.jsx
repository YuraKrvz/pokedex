import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function MediaCard({name, url}) {
   const [pokemon, setPokemon] = React.useState(null);
   React.useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(res => console.log(res))
   }, [])
   
   return (
     <Card sx={{ maxWidth: 245, margin: '10px' }}>
       <CardMedia
         component="img"
         height="120"
         //image={pokemon.sprites.version.versions['generation-vi']['omegaruby-alphasapphire']['front_default']}
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
            {name}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Lizards are a widespread group of squamate reptiles, with over 6,000
           species, ranging across all continents except Antarctica
         </Typography>
       </CardContent>
       <CardActions>
         <Button variant="contained" size="small">Share</Button>
         <Button variant="contained" size="small">Learn More</Button>
       </CardActions>
     </Card>
   );
 }
