import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//
const styles = {
   grass: '#b2dfdb',
   fire: '#ffccbc',
   water: '#b3e5fc',
   bug: '#bcaaa4',
   normal: '#e0e0e0',
   poison: '#e91e63',
   electric: '#f0f4c3',
   ground: '#795548',
   psychic: '#b0bec5',

}

export default function MediaCard({name, url}) {
   const [pokemon, setPokemon] = React.useState(null);
   React.useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(res => {
         setPokemon(res)
      })
   }, [])
  //${pokemon && styles[`pokemon.types[0].type.name}`]
   return (
      <Link to={`${name}`} >
         <Card sx={{ maxWidth: 245, margin: '10px', backgroundColor: `${pokemon && styles[`${pokemon.types[0].type.name}`]}` }}>
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
