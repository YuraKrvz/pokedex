import * as React from 'react';
import {colors} from '../config';
import { Link } from "react-router-dom";
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Pokedex
          </Typography>
          <BasicSelect number={number} setNumber={setNumber} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={ search.search }
              onChange={ e => setSearch({...search, search: e.target.value}) }
              placeholder="Search???"
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

  React.useEffect(()=>{
     fetch(url)
     .then(res=>res.json())
     .then(res => {
        setPokemon(res)
     })
  }, [])

  return (
     <Link to={`${name}`} style={{textDecoration: 'none', }} >
        <Card sx={{ 
          width: 300, height: '400px', margin: '10px', 
          backgroundColor: `${pokemon && colors[`${pokemon.types[0].type.name}`]}`,
          boxShadow: '10px 5px 5px silver',
        }}>
           <CardMedia
              sx={{backgroundPosition: 'center', backgroundSize: 'cover', height: '250px'}}
              component="img"
              height="120"
              image={pokemon && pokemon.sprites['front_default']}
              alt="pokemon img"
           />
           <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textTransform: 'capitalize'}}>
                 {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                 Abilities: {pokemon && pokemon.abilities.map(a => a.ability.name + ', ')}
                 <br />
                 Base experience: {pokemon && pokemon.base_experience}
              </Typography>
           </CardContent>
        </Card>
     </Link>
  );
}

//ITEM Card
export function ItemCard({pokemon}){
  return(
    <Card sx={{ 
      width: 300, height: '500px', margin: '10px', 
      backgroundColor: `${pokemon && colors[`${pokemon.types[0].type.name}`]}`,
      boxShadow: '10px 5px 5px silver',
    }}>
      <CardMedia
        sx={{backgroundPosition: 'center', backgroundSize: 'cover', height: '300px'}}
        component="img"
        height="120"
        image={pokemon && pokemon.sprites['front_default']}
        alt="pokemon img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon && pokemon.name}
        </Typography>
       <Typography variant="body2" color="text.secondary">
        Abilities: {pokemon && pokemon.abilities.map(a => a.ability.name + ', ')}
        Base experience: {pokemon && pokemon.base_experience}
       </Typography>
      </CardContent>
      <CardActions>
       <Link to="/"> 
        <Button size="small"> Back </Button> 
       </Link>
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Number</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={number.number}
          label="Number"
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



