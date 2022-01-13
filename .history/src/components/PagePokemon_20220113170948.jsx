import * as React from 'react';
import { useParams } from 'react-router-dom';
import {ContainerCustom, ItemCard} from './MaterialUiComponents';

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
      <ContainerCustom>
         <ItemCard pokemon={pokemon} />
      </ContainerCustom>
   )
}