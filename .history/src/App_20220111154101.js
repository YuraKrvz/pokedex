import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';
import {Header, MainFeed} from './components/MaterialUiComponents';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Header/>
    <Route path='/' element={<PageHome />} />
    <Route path='/name' element={<PagePokemon />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
