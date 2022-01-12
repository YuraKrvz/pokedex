import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function PagePokemon() {
   const [pokemon, setPokemon] = useState();
   const params = useParams();
   useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then(res=> res.json())
      .then(res => console.log(res))
   },[]);
   return (
      <>
         <Container>
            <Grid sx={{ flexGrow: 1, marginTop: '20px' }} container spacing={2}>
               <Grid item xs={12}>
                  <Grid container justifyContent="center" spacing={2}>
                    
                  </Grid>
               </Grid>
            </Grid>
         </Container>
      </>
   )
}


// {pokemon && currentPage.map(item => <MediaCard key={item.name} name={item.name} url={item.url} />)}