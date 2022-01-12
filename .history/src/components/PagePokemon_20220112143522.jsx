import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function PagePokemon() {
   const params = useParams();
   console.log(params.pokemon)
   useEffect(()=>{
      fetch()
   },[]);
   return (
      <div>
         page pokemon
      </div>
   )
}
