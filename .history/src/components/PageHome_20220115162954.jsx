import React, {useState, useEffect} from 'react';
import {Header, Footer, ContainerCustom, MediaCard} from './MaterialUiComponents';
import {handlerFilterList} from '../config';

export default function PageHome() {
   const [state, setState] = useState({ number: 20, search: ''});
   const [pages, setPages] = useState({nextPage: '', prevPage: ''})

   const [list, setList] = useState();
   const [currentPage, setCurrentPage] = useState();

   const handlerPagination = async (variant) => {
      const response = await fetch(variant === 'next' ? pages.nextPage : pages.prevPage).catch(console.error)
      const res = await response.json();
         setPages( {...pages, nextPage: res.next, prevPage: res.previous} );
         setCurrentPage(res.results)
         setList(res.results);
   }


   useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon?&limit=${state.number}`)
      .then(res => res.json())
      .then(res => {
         setCurrentPage(res.results);  
         setPages( {...pages, nextPage: res.next, prevPage: res.previous} );
         setList(res.results)
      })
   }, [state.number]);

   useEffect(()=>{ 
      handlerFilterList(state.search, setList, list, currentPage) 
   }, [state.search]);

   return (
      <>
         <Header search={state} setSearch={setState} number={state} setNumber={setState}/>

         <ContainerCustom>
            {list && list.map(item => <MediaCard name={item.name} url={item.url} key={item.name} />)}
         </ContainerCustom>

         <Footer handler={handlerPagination} />
      </>
   )
}
