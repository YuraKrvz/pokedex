import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {colors} from '../config';
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
//
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//
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