import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';
import {Header, MainFeed} from './MaterialUiComponents';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/name' element={<PagePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
