import React, {useState, useEffect} from 'react'
import {Header, MainFeed} from './MaterialUiComponents';

export default function PageHome() {
   const [currentPage, setCurrentPage] = useState();
   const [nextPage, nextPage] = useState();
   const [prevPage, prevPage] = useState();

   useEffect(()=>{
      fetch('')
   }, [])
   return (
      <div>
         <Header/>
         <MainFeed />
      </div>
   )
}
