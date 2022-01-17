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

export function MediaCard({name, url}) {
   const [pokemon, setPokemon] = React.useState(null);
   const [openModal, setOpenModal] = React.useState(false);
 
   React.useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(res => {
         setPokemon(res)
      })
   }, [])
 
   return (
         <Card sx={{ 
           width: 300, height: '450px', margin: '10px', 
           backgroundColor: `${pokemon && colors[`${pokemon.types[0].type.name}`]}`,
           boxShadow: '10px 5px 5px silver',
         }} className="hover">
             <CardMedia
                 sx={{backgroundPosition: 'center', backgroundSize: 'cover', height: '250px'}}
                 component="img"
                 height="120"
                 image={pokemon && pokemon.sprites['front_default']}
                 alt="pokemon img"
             />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div" style={{ textTransform: 'capitalize'}}>
                  {name && name || pokemon && pokemon.name} id: {pokemon && pokemon.id}
                  <ButtonFavorite id={pokemon && pokemon.id} />
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Abilities: {pokemon && pokemon.abilities.map(a => a.ability.name + ', ')}
                  <br />
                  Base experience: {pokemon && pokemon.base_experience}
               </Typography>
               <BasicModal url={url} open={openModal} setOpen={setOpenModal} />
            </CardContent>
         </Card>
   );
 }