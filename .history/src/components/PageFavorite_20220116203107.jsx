import {useState, useEffect} from 'react';
import {ContainerCustom, MediaCard} from './MaterialUiComponents';
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
         .then(res => setFavorite( prevState =>  ))
      })
   },[]);

   return (
      <ContainerCustom>
         {/*favorite && favorite.map(pokemon => <MediaCard name={pokemon.name} url={pokemon.url} key={pokemon.name} />)*/}
      </ContainerCustom>
   )
}