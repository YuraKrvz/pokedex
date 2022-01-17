import { Link } from "react-router-dom";
import ContainerCustom from '../components/ContainerCustom';
import MediaCard from '../components/MediaCard';
import { useSelector } from 'react-redux';
import { Button } from "@mui/material";

export default function PageFavorite() {
   const favorites = useSelector(state => state.favorite.favorite);

   return (
      <ContainerCustom>
         <Link to='/'><Button size="large" variant="contained">back</Button></Link>
         {favorites && favorites.map(numb => <MediaCard url={`https://pokeapi.co/api/v2/pokemon/${numb}/`} btn={true} key={numb} />)}
      </ContainerCustom>
   )
}