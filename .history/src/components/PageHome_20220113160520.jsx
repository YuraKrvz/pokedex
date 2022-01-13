import React, {useState, useEffect} from 'react';
import {Header, Footer, ContainerCustom, MediaCard} from './MaterialUiComponents';
// import MediaCard from '../components/MediaCard';
import {handlerFilterList} from '../config';

export default function PageHome() {
   const [number, setNumber] = useState(20);
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
         setList(res.results);
   }


   useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon?&limit=${number}`)
      .then(res => res.json())
      .then(res => {
         setCurrentPage(res.results);  
         setNextPage(res.next);
         setPrevPage(res.previous);
         setList(res.results)
      })
   }, [number])

   useEffect(()=>{ 
      handlerFilterList(search, setList, list, currentPage) 
   }, [search])

   return (
      <>
         <Header search={search} setSearch={setSearch} number={number} setNumber={setNumber}/>

         <ContainerCustom>
            {list && list.map(item => <MediaCard key={item.name} name={item.name} url={item.url} />)}
         </ContainerCustom>

         <Footer handler={handlerPagination} />
      </>
   )
}
