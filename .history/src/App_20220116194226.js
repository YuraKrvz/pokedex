import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
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