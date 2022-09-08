import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Header/NavBar/NavBar';
import Home from './pages/Home';
import ItemListContainer from './components/Products/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ProductDetail/ItemDetailContainer/ItemDetailContainer';
import PromoListContainer from './components/Products/PromoListContainer/PromoListContainer';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/Cart/CartContainer/CartContainer';
import Checkout from './components/Cart/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Categoria/:nombreCategoria' element={<ItemListContainer/>}/>
              <Route path='/:Categoria/:id' element={<ItemDetailContainer/>}/>
              <Route path='/Promos' element={<PromoListContainer/>}/>
              <Route path='/Promos/:Categoria/:url' element={<ItemDetailContainer/>}/>
              <Route path='/Carrito' element={<CartContainer/>}/>
              <Route path='/Carrito/Checkout' element={<Checkout/>}/>
            </Routes>
          <Footer/>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;