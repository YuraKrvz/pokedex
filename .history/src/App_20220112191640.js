import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';
import { StateContext } from "./state";

export default function App() {
  return (
    <StateContext.Provider value={}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path=':pokemon' element={<PagePokemon />} />
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
}