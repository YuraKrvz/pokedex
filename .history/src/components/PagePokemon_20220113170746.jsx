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
            <ItemCard pokemon={pokemon} />
         </ContainerCustom>
      </>
   )
}