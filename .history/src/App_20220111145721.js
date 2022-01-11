import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/name' element={<PagePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
