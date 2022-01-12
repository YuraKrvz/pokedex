import React from 'react';
import { useParams } from 'react-router-dom';

export default function PagePokemon() {
   const params = useParams();
   console.log(params)
   return (
      <div>
         page pokemon
      </div>
   )
}
