import * as React from 'react';
import {ContainerCustom, } from './MaterialUiComponents';
import { useSelector } from 'react-redux';

export default function PageFavorite() {
const todos = useSelector(state => state.favorite.favorite)

   React.useEffect(()=>{

   },[]);

   return (
      <ContainerCustom>
         123
      </ContainerCustom>
   )
}