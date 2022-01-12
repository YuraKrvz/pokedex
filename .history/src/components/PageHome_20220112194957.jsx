import React, {useState, useEffect} from 'react';
import {Header, Footer, FooterBtns} from './MaterialUiComponents';
import MediaCard from '../components/MediaCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function PageHome() {
   const [list, setList] = useState();
   const [currentPage, setCurrentPage] = useState();
   const [nextPage, setNextPage] = useState();
   const [prevPage, setPrevPage] = useState();
   const [search, setSearch] = useState('');

   const handlerPagination = async (variant) => {
      const response = await fetch(variant === 'next' ? nextPage : prevPage).catch(console.error)
      const res = await response.json();
         setNextPage(res.next);
         setPrevPage(res.previous)
         setCurrentPage(res.results)
        
   }
   const handlerFilterList = () => {
      setList(list.filter(pok => pok.name.includes(search)))
   }

   useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?&limit=21')
      .then(res => res.json())
      .then(res => {
         setCurrentPage(res.results);  
         setNextPage(res.next);
         setPrevPage(res.previous);
         setList(res.results)
      })
   }, [])
   useEffect(()=>{ handlerFilterList() }, [search])

   return (
      <>
            <Header search={search} setSearch={setSearch}/>
            <button onClick={()=> console.log(list)}>show</button>
            <Container>
               <Grid sx={{ flexGrow: 1, marginTop: '20px' }} container spacing={2}>
                  <Grid item xs={12}>
                     <Grid container justifyContent="center" spacing={2}>
                        {list && list.map(item => <MediaCard key={item.name} name={item.name} url={item.url} />)}
                     </Grid>
                  </Grid>
               </Grid>
            </Container>
            <Footer>
               <FooterBtns handler={handlerPagination} />
            </Footer> 
      </>
   )
}
