import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import OfertaDetailContainer from './components/OfertaDetailContainer/OfertaDetailContainer';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria/:nombreCategoria'/>
        <Route path='/detalle/:nombre' element={<OfertaDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;