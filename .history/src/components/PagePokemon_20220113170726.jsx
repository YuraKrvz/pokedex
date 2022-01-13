import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import {ContainerCustom, ItemCard} from './MaterialUiComponents';
import {colors} from '../config';
//
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PagePokemon() {
   const [pokemon, setPokemon] = React.useState();
   const params = useParams();
   React.useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then(res=> res.json())
      .then(res => {
         setPokemon(res)
      })
   },[]);
   return (
      <>
         <ContainerCustom>
                  <Card sx={{ maxWidth: 345, margin: '10px', backgroundColor: `${pokemon && colors[`${pokemon.types[0].type.name}`]}` }}>
                        <CardMedia
                           component="img"
                           height="140"
                           image={`${pokemon && pokemon.sprites['front_default']}`}
                           alt="img pokemon"
                        />
                        <CardContent>
                           <Typography gutterBottom variant="h5" component="div">
                              {pokemon && pokemon.name}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Abilities: {pokemon && pokemon.abilities.map(a => a.ability.name + ', ')}
                              Base experience: {pokemon && pokemon.base_experience}
                           </Typography>
                        </CardContent>
                        <CardActions>
                           <Link to="/"> 
                              <Button size="small"> Back </Button> 
                           </Link>
                        </CardActions>
                     </Card>
                     <ItemCard pokemon={pokemon} />
         </ContainerCustom>
      </>
   )
}