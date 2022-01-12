import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';
import { StateContext } from "./state";

export default function App() {
  const [state, setState] = useState({});
  return (
    <StateContext.Provider value={state, setState}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path=':pokemon' element={<PagePokemon />} />
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
}