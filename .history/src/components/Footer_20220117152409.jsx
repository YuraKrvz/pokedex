import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Footer({handler}) {
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
 export function BasicFooter({children}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}