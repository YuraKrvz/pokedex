import {useState, useEffect} from 'react';
import {ContainerCustom, MediaCard} from './MaterialUiComponents';
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

   useEffect(()=>{
      console.log(favorite)
   }, [favorites])

   return (
      <ContainerCustom>
         {favorite && favorite.map(numb => <MediaCard  url={`https://pokeapi.co/api/v2/pokemon/${numb}/`} key={numb} />)}
      </ContainerCustom>
   )
}