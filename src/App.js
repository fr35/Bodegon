import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Header/NavBar/NavBar';
import Home from './pages/Home';
import ItemListContainer from './components/Products/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ProductDetail/ItemDetailContainer/ItemDetailContainer';
import PromoListContainer from './components/Products/PromoListContainer/PromoListContainer';
import LogIn from './components/Log/LogIn/LogIn';
import Registro from './components/Log/Registro/Registro';
import Footer from './components/Footer/Footer';
import { UserEmailContextProvider } from './context/UserEmailContext/userEmailContext';
import { UserPasswordContextProvider } from './context/UserPasswordContext/userPasswordContext';
import { UserNameContextProvider } from './context/UserNameContext/userNameContext';
import { UserPhoneContextProvider } from './context/UserPhoneContext/userPhoneContext';
import { UserAdressContextProvider } from './context/UserAdressContext/userAdressContext';
import { CartContextProvider } from './context/CartContext/cartContext';
import CartContainer from './components/Cart/CartContainer/CartContainer';





function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <UserEmailContextProvider>
          <UserPasswordContextProvider>
            <UserNameContextProvider>
              <UserPhoneContextProvider>
                <UserAdressContextProvider>
                  <NavBar/>
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Categoria/:nombreCategoria' element={<ItemListContainer/>}/>
                    <Route path='/:Categoria/:url' element={<ItemDetailContainer/>}/>
                    <Route path='/Promos' element={<PromoListContainer/>}/>
                    <Route path='/Promos/:Categoria/:url' element={<ItemDetailContainer/>}/>
                    <Route path='/LogIn' element={<LogIn/>}/>
                    <Route path='/LogIn/Registro' element={<Registro/>}/>
                    <Route path='/Carrito' element={<CartContainer/>}/>
                  </Routes>
                  <Footer/>
                </UserAdressContextProvider>
              </UserPhoneContextProvider>
            </UserNameContextProvider>
          </UserPasswordContextProvider>
        </UserEmailContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;