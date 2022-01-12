import * as React from 'react';
import { Link } from "react-router-dom";
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
      .then(res => {
         setPokemon(res)
      })
   }, [])
  
   return (
      <Link to={`${name}`} >
         <Card sx={{ maxWidth: 245, margin: '10px' }}>
            <CardMedia
               component="img"
               height="120"
               image={pokemon && pokemon.sprites['front_default']}
               alt="pokemon img"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {name}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Abilities: {pokemon && pokemon.abilities.map(a => a.ability.name + ', ')}
                  <br />
                  Base experience: {pokemon && pokemon.base_experience}
               </Typography>
            </CardContent>
         </Card>
      </Link>
   );
 }
