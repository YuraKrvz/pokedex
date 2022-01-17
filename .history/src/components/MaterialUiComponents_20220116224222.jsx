import * as React from 'react';
import { useSelector } from 'react-redux';
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
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
// HEADER
export function Header({search, setSearch, number, setNumber}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Pokedex
          </Typography>
          <Link to='/favorite' style={{textDecoration: 'none'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Link>
          <BasicSelect number={number} setNumber={setNumber} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={ search.search }
              onChange={ e => setSearch({...search, search: e.target.value}) }
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// MediaCard
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
                 {name} id: {pokemon && pokemon.id}
                 <ButtonFavorite id={pokemon.id} />
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

//ITEM Card
export function ItemCard({pokemon, url}){
  const [openModal, setOpenModal] = React.useState(false);
  const navigate = useNavigate();
  return(
    <Card sx={{ 
      width: 300, height: '500px', margin: '10px', 
      backgroundColor: `${pokemon && colors[`${pokemon.types[0].type.name}`]}`,
      boxShadow: '10px 5px 5px silver',
    }} className="hover">
      <CardMedia
        sx={{backgroundPosition: 'center', backgroundSize: 'cover', height: '300px'}}
        component="img"
        height="120"
        image={pokemon && pokemon.sprites['front_default']}
        alt="pokemon img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textTransform: 'capitalize'}}>
          {pokemon && pokemon.name}
          <ButtonFavorite id={pokemon.id} />
        </Typography>
       <Typography variant="body2" color="text.secondary">
        Abilities: {pokemon && pokemon.abilities.map(a => a.ability.name + ', ')}
        Base experience: {pokemon && pokemon.base_experience}
       </Typography>
      </CardContent>
      <CardActions>
       <div onClick={()=> navigate(-1)}> 
        <Button size="small"> Back </Button> 
       </div>
       <BasicModal url={url} open={openModal} setOpen={setOpenModal} />
      </CardActions>
  </Card>
  )
}
//  ContainerCustom
export function ContainerCustom ({children}){

  return (
    <Container>
      <Grid sx={{ flexGrow: 1, marginTop: '20px' }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
//FOOTER
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

// BasicSelect, FORM CONTROL
export function BasicSelect({number, setNumber}) {
  const handleChange = (event) => {
    setNumber({...number, number: event.target.value});
  };
  return (
    <Box sx={{ minWidth: 120}} >
      <FormControl fullWidth sx={{color: 'white'}}>
        <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Number</InputLabel>
        <Select
          sx={{color: 'white', height: '50px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={number.number}
          label="1"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
// MODAL



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

export function ButtonFavorite({id}){
  const favorites = useSelector(state => state.favorite.favorite);

  console.log(id)
  const [state, setState] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favorites.find(item => item === id));
  const handler = () => {
    setState(!state)

  }

  return (
    <IconButton onClick={handler} sx={{color: 'red'}} size="small">
      {isFavorite ? <FavoriteIcon fontSize="inherit" /> : <FavoriteBorderIcon fontSize="inherit" />}
    </IconButton>
  )
}

