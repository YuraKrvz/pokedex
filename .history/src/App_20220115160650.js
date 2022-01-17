import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';

export default function App() {
  const [currentPage, setCurrentPage] = useState();

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageHome currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
          <Route path=':pokemon' element={<PagePokemon />} />
        </Routes>
      </BrowserRouter>
  );
}