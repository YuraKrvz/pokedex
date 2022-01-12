import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/pokemon/pokemon:' element={<PagePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
