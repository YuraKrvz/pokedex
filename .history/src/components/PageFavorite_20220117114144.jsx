import {useState, useEffect} from 'react';
import {ContainerCustom, ItemCard} from './MaterialUiComponents';
import { useSelector } from 'react-redux';

export default function PageFavorite() {
   const [favorite, setFavorite] = useState([]);
   const favorites = useSelector(state => state.favorite.favorite);
   useEffect(()=>{
      favorites.map(numb => {
         fetch(`https://pokeapi.co/api/v2/pokemon/${numb}/`)
         .then(r => r.json())
         .then(res => setFavorite( prevState => [...prevState, res] ))
      })
   },[]);

   return (
      <ContainerCustom>
         {favorite && favorite.map(pokemon => <ItemCard pokemon={pokemon} url={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`} key={pokemon.name} />)}
      </ContainerCustom>
   )
}