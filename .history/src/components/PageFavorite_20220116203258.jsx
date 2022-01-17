import {useState, useEffect} from 'react';
import {ContainerCustom, ItemCard} from './MaterialUiComponents';
import { useSelector } from 'react-redux';

export default function PageFavorite() {
   const [favorite, setFavorite] = useState([]);
   const favorites = useSelector(state => state.favorite.favorite);

   console.log(favorite)

   useEffect(()=>{
      favorites.map(numb => {
         fetch(`https://pokeapi.co/api/v2/pokemon/${numb}/`)
         .then(r => r.json())
         // .then(res => setFavorite( [...favorite, res] ))
         .then(res => setFavorite( prevState => [...prevState, res] ))
      })
   },[]);

   return (
      <ContainerCustom>
         {favorite && favorite.map(pokemon => <ItemCard pokemon={pokemon} key={pokemon.name} />)}
      </ContainerCustom>
   )
}