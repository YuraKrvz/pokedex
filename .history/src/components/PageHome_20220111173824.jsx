import React, {useState, useEffect} from 'react'
import {Header, MainFeed} from './MaterialUiComponents';
import MediaCard from '../components/MediaCard';

export default function PageHome() {
   const [currentPage, setCurrentPage] = useState();
   const [nextPage, setNextPage] = useState();
   const [prevPage, setPrevPage] = useState();

   useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?&limit=20')
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
      <div>
         <Header/>
            <Container>
               <Grid sx={{ flexGrow: 1, marginTop: '20px' }} container spacing={2}>
                  <Grid item xs={12}>
                     <Grid container justifyContent="center" spacing={2}>
            {currentPage && currentPage.map(item => <MediaCard key={item.name} name={item.name} url={item.url} />)}
         </MainFeed>
      </div>
   )
}
