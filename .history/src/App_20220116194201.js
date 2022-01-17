import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './store/index';
import PageHome from './components/PageHome';
import PagePokemon from './components/PagePokemon';

export default function App() {
  return (
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PageHome />} />
            <Route path=':pokemon' element={<PagePokemon />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}