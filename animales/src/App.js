import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GestionAnimales from './GestionAnimales';
import Menu from './Menu';
import Busqueda from './Busqueda';

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<GestionAnimales></GestionAnimales>}></Route>
        <Route path='/buscar' element={<Busqueda></Busqueda>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
