import React, {useState, useEffect} from 'react'
import {Header, MainFeed} from './MaterialUiComponents';

export default function PageHome() {
   const [currentPage, setCurrentPage] = useState();
   const [nextPage, nextPage] = useState();
   const [prevPage, prevPage] = useState();

   useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
      .then(res => res.json())
      .then(res => console.log(res))
   }, [])
   return (
      <div>
         <Header/>
         <MainFeed />
      </div>
   )
}
