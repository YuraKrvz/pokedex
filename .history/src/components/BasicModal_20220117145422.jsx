import * as React from 'react';
import {colors} from '../config';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

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