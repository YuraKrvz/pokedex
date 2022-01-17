import { useNavigate } from "react-router-dom";
import ContainerCustom from '../components/ContainerCustom';
import MediaCard from '../components/MediaCard';
import { useSelector } from 'react-redux';
import { Button } from "@mui/material";

export default function PageFavorite() {
   const favorites = useSelector(state => state.favorite.favorite);
   const navigate = useNavigate();

   return (
      <ContainerCustom>
         <div>
            <Button onClick={ ()=> navigate(-1) } size="large" variant="contained">back</Button>
            </div>
            {favorites && favorites.map(numb => <MediaCard url={`https://pokeapi.co/api/v2/pokemon/${numb}/`} btn={true} key={numb} />)}
      </ContainerCustom>
   )
}