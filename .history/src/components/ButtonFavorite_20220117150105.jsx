import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Toggle } from '../store/favoriteSlice';
import { Toggle } from '../store/favoriteSlice';

export function ButtonFavorite({id}){

   const favorites = useSelector(state => state.favorite.favorite);
   const dispatch = useDispatch();
   const [icon, setIcon] = React.useState( !!favorites.find(numb => numb === id) );
 
   const handler = () => {
     dispatch( Toggle(id) )
   }
 
   React.useEffect(()=>{
     setIcon(!!favorites.find(numb => numb === id));
   })
 
   return (
     <IconButton onClick={handler} sx={{color: 'red'}} size="small">
       {icon ? <FavoriteIcon fontSize="inherit" /> : <FavoriteBorderIcon fontSize="inherit" />}
     </IconButton>
   )
 }