import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';
import {Header} from './components/MaterialUiComponents'

export default function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path=':pokemon' element={<PagePokemon />} />
        </Routes>
      </BrowserRouter>
  );
}