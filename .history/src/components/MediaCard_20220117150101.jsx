import * as React from 'react';
import {colors} from '../config';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ButtonFavorite from './ButtonFavorite';
import BasicModal from './BasicModal';

export function MediaCard({name, url}) {
   const [pokemon, setPokemon] = React.useState(null);
   const [openModal, setOpenModal] = React.useState(false);
 
   React.useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(res => {
         setPokemon(res)
      })
   }, [])
 
   return (
         <Card sx={{ 
           width: 300, height: '450px', margin: '10px', 
           backgroundColor: `${pokemon && colors[`${pokemon.types[0].type.name}`]}`,
           boxShadow: '10px 5px 5px silver',
         }} className="hover">
             <CardMedia
                 sx={{backgroundPosition: 'center', backgroundSize: 'cover', height: '250px'}}
                 component="img"
                 height="120"
                 image={pokemon && pokemon.sprites['front_default']}
                 alt="pokemon img"
             />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div" style={{ textTransform: 'capitalize'}}>
                  {name && name || pokemon && pokemon.name} id: {pokemon && pokemon.id}
                  <ButtonFavorite id={pokemon && pokemon.id} />
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Abilities: {pokemon && pokemon.abilities.map(a => a.ability.name + ', ')}
                  <br />
                  Base experience: {pokemon && pokemon.base_experience}
               </Typography>
               <BasicModal url={url} open={openModal} setOpen={setOpenModal} />
            </CardContent>
         </Card>
   );
 }