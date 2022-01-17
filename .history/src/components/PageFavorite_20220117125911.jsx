import {useState, useEffect} from 'react';
import {ContainerCustom, MediaCard} from './MaterialUiComponents';
import { useSelector } from 'react-redux';

export default function PageFavorite() {
   // const [favorite, setFavorite] = useState([]);
   const favorites = useSelector(state => state.favorite.favorite);
   
   // useEffect(()=>{
   //    favorites.map(numb => {
   //       fetch(`https://pokeapi.co/api/v2/pokemon/${numb}/`)
   //       .then(r => r.json())
   //       .then(res => setFavorite( prevState => [...prevState, res] ))
   //    })
   // },[]);

   // useEffect(()=>{
   //    console.log(favorite)
   // }, [favorites])

   return (
      <ContainerCustom>
         {favorites && favorites.map(numb => <MediaCard url={`https://pokeapi.co/api/v2/pokemon/${numb}/`} btn={true} key={numb} />)}
      </ContainerCustom>
   )
}