import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function PagePokemon() {
   const params = useParams();
   useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then(res=> res.json())
      .then(res => console.log(res))
   },[]);
   return (
      <>
         <Container>
            
         </Container>
      </>
   )
}
