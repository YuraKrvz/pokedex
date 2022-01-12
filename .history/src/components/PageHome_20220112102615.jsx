import React, {useState, useEffect} from 'react'
import {Header, Footer, FooterBtns} from './MaterialUiComponents';
import MediaCard from '../components/MediaCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function PageHome() {
   const [currentPage, setCurrentPage] = useState();
   const [nextPage, setNextPage] = useState();
   const [prevPage, setPrevPage] = useState();
   const handlerOfPagination = (e) => {
      console.log(e.target.name)
   }

   useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?&limit=21')
      .then(res => res.json())
      .then(res => {
         // console.log(res)

         setCurrentPage(res.results);  
         setNextPage(res.next);
         setPrevPage(res.previous);

      })
   }, [])
   // console.log(currentPage)
   return (
      <>
            <Header/>
            <Container>
               <Grid sx={{ flexGrow: 1, marginTop: '20px' }} container spacing={2}>
                  <Grid item xs={12}>
                     <Grid container justifyContent="center" spacing={2}>
                        {currentPage && currentPage.map(item => <MediaCard key={item.name} name={item.name} url={item.url} />)}
                     </Grid>
                  </Grid>
               </Grid>
            </Container>
            <Footer>
               <FooterBtns />
            </Footer> 
      </>
   )
}
