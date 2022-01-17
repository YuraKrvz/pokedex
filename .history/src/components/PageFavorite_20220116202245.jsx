import {useState, useEffect} from 'react';
import {ContainerCustom, } from './MaterialUiComponents';
import { useSelector } from 'react-redux';

export default function PageFavorite() {
   const [favorite, setFavorite] = useState([]);
   const favorites = useSelector(state => state.favorite.favorite);

   console.log(favorites)

   useEffect(()=>{
      favorites.map(numb => {
         fetch(`https://pokeapi.co/api/v2/pokemon/${numb}/`)
         .then(r => r.json())
         .then(res => setFavorite([...favorite, res]))
      })
   },[]);

   return (
      <ContainerCustom>
         123
      </ContainerCustom>
   )
}