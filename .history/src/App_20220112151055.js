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
        <Route path=':pokemon' element={<PagePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}
//grass, fire, water, bug, normal, poison, 
export default App;
