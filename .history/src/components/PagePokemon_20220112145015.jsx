import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//

export default function PagePokemon() {
   const [pokemon, setPokemon] = useState();
   const params = useParams();
   useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then(res=> res.json())
      .then(res => {
         console.log(res)
         setPokemon(res)
      })
   },[]);
   return (
      <>
         <Container>
            <Grid sx={{ flexGrow: 1, marginTop: '20px' }} container spacing={2}>
               <Grid item xs={12}>
                  <Grid container justifyContent="center" spacing={2}>
                     <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                           <Typography gutterBottom variant="h5" component="div">
                              {pokemon && pokemon.name}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                           </Typography>
                        </CardContent>
                        <CardActions>
                           <Button size="small">Share</Button>
                           <Button size="small">Learn More</Button>
                        </CardActions>
                     </Card>
                  </Grid>
               </Grid>
            </Grid>
         </Container>
      </>
   )
}


// {pokemon && currentPage.map(item => <MediaCard key={item.name} name={item.name} url={item.url} />)}

