import * as React from 'react';
import {ContainerCustom, } from './MaterialUiComponents';
import { useSelector } from 'react-redux';

export default function PageFavorite() {
const totod = useSelector(state => state.favorite)

   React.useEffect(()=>{

   },[]);

   return (
      <ContainerCustom>
         123
      </ContainerCustom>
   )
}