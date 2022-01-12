import React, {useState, useEffect} from 'react'
import {Header, MainFeed} from './MaterialUiComponents';

export default function PageHome() {
   const [pokemons, setPokemons] = useState([])

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
