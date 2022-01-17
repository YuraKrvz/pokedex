import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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