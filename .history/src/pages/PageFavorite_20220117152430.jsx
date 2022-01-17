import { useNavigate } from "react-router-dom";
import ContainerCustom from '../components/ContainerCustom';
import MediaCard from '../components/MediaCard';
import { BasicFooter } from "../components/Footer";
import { useSelector } from 'react-redux';
import { Button } from "@mui/material";

export default function PageFavorite() {
   const favorites = useSelector(state => state.favorite.favorite);
   const navigate = useNavigate();

   return (
     <>
      <BasicFooter>
         <Button onClick={ ()=> navigate(-1) } size="large" variant="contained">back</Button>
      </BasicFooter>
      <ContainerCustom>
            {favorites && favorites.map(numb => <MediaCard url={`https://pokeapi.co/api/v2/pokemon/${numb}/`} btn={true} key={numb} />)}
      </ContainerCustom>
     </>
   )
}