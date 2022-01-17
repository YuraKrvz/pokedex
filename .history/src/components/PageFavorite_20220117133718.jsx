import { Link } from "react-router-dom";
import {ContainerCustom, MediaCard} from './MaterialUiComponents';
import { useSelector } from 'react-redux';

export default function PageFavorite() {
   const favorites = useSelector(state => state.favorite.favorite);

   return (
      <ContainerCustom>
         <Link to='/'><button>back</button></Link>
         {favorites && favorites.map(numb => <MediaCard url={`https://pokeapi.co/api/v2/pokemon/${numb}/`} btn={true} key={numb} />)}
      </ContainerCustom>
   )
}