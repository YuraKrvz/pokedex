import React, {useState, useEffect} from 'react'
import {Header, MainFeed} from './MaterialUiComponents';
import MediaCard from './MaterialUiComponents';

export default function PageHome() {
   const [currentPage, setCurrentPage] = useState([]);
   const [nextPage, setNextPage] = useState();
   const [prevPage, setPrevPage] = useState();

   useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?&limit=20')
      .then(res => res.json())
      .then(res => {
         console.log(res)

         setCurrentPage(res.results);  
         setNextPage(res.next);
         setPrevPage(res.previous);

      })
   }, [])
   return (
      <div>
         <Header/>
         <MainFeed>
            {currentPage.forEach(item => console.log({item.name}) )}
         </MainFeed>
      </div>
   )
}
