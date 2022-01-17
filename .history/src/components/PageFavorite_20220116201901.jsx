import * as React from 'react';
import {ContainerCustom, } from './MaterialUiComponents';
import { useSelector } from 'react-redux';

export default function PageFavorite() {
   const favorites = useSelector(state => state.favorite.favorite);

console.log(todos)

   React.useEffect(()=>{
      favorites.map(numb => {
         fetch('')
      })
   },[]);

   return (
      <ContainerCustom>
         123
      </ContainerCustom>
   )
}