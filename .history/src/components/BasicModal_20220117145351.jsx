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

export default function BasicModal({url, open, setOpen}) {

   const [pok, setPok] = React.useState();
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   React.useEffect(()=> {
     fetch(url)
     .then(res => res.json())
     .then(res => setPok(res))
   }, [])
 
   const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     bgcolor: 'background.paper',
     boxShadow: 24,
     p: 4,
     backgroundColor: `${pok && colors[`${pok.types[0].type.name}`]}`,
   };
 
   return (
     <div>
       <Button onClick={handleOpen} size="large" variant="contained">Show details</Button>
       <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box >
             <Card sx={style} className="hover">
                 <CardMedia
                   sx={{backgroundPosition: 'center', backgroundSize: 'cover', height: '300px'}}
                   component="img"
                   height="120"
                   image={pok && pok.sprites['front_default']}
                   alt="pokemon img"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" style={{ textTransform: 'capitalize'}}>
                     {pok && pok.name} 
                   </Typography>
                 <Typography variant="body2" color="text.secondary">
                   Abilities: {pok && pok.abilities.map(a => a.ability.name + ', ')}
                   Base experience: {pok && pok.base_experience}.
                   Height: {pok && pok.height}. Weight: {pok && pok.weight}
                 </Typography>
                 </CardContent>
                 <CardActions>
                 </CardActions>
               </Card>
         </Box>
       </Modal>
     </div>
   );
 }