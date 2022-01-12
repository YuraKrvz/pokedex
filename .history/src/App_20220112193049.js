import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path=':pokemon' element={<PagePokemon />} />
        </Routes>
      </BrowserRouter>
  );
}