import * as React from 'react';
import Button from '@mui/material/Button';
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

export function Footer({handler}) {
   return (
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar variant="dense">
         <FooterBtns handler={handler} />
         </Toolbar>
       </AppBar>
     </Box>
   );
 }
 
 // BTN GROUP
 export function FooterBtns({handler}) {
   return (
     <ButtonGroup disableElevation variant="contained ">
       <Button name="back" onClick={()=> handler('previous')}> <ArrowBackIosNewIcon/> </Button>
       <Button name="forward" onClick={()=> handler('next')}> <ArrowForwardIosIcon/> </Button>
     </ButtonGroup>
   );
 }