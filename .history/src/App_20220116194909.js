import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import PageHome from './components/PageHome';
import PageFavorite from './components/PageFavorite';

export default function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PageHome />} />
            <Route path='/favorite' element={<PageFavorite />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}