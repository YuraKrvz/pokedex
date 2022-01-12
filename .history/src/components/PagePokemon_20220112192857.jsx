import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {colors} from '../config';
//
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//
import { StateContext } from '../state';

export default function PagePokemon() {
   const state = React.useContext(StateContext);

   const [pokemon, setPokemon] = React.useState();
   const params = useParams();
   React.useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then(res=> res.json())
      .then(res => {
         setPokemon(res)
      })
   },[]);
   console.log(state)
   return (
      <>
         <Container>
            <Grid sx={{ flexGrow: 1, marginTop: '20px' }} container spacing={2}>
               <Grid item xs={12}>
                  <Grid container justifyContent="center" spacing={2}>
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
                  </Grid>
               </Grid>
            </Grid>
         </Container>
      </>
   )
}