import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PromoListContainer from './components/PromoListContainer/PromoListContainer';
import PromoDetailContainer from './components/PromoDetailContainer/PromoDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Categoria/:nombreCategoria' element={<ItemListContainer/>}/>
        <Route path='/:Categoria/:url' element={<ItemDetailContainer/>}/>
        <Route path='/Promos' element={<PromoListContainer/>}/>
        <Route path='/Promos/:Categoria/:url' element={<PromoDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;