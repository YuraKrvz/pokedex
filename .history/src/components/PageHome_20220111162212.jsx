import React, {useState, useEffect} from 'react'
import {Header, MainFeed} from './MaterialUiComponents';

export default function PageHome() {
   const [currentPage, setCurrentPage] = useState();
   const [nextPage, setNextPage] = useState();
   const [prevPage, setPrevPage] = useState();

   useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
      .then(res => res.json())
      .then(res => {
         console.log(res)
         setCurrentPage(res.results)
         console.log(res.results)
         setNextPage()

      })
   }, [])
   return (
      <div>
         <Header/>
         <MainFeed />
      </div>
   )
}
