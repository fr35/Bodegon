import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PromoListContainer from './components/PromoListContainer/PromoListContainer';
import PromoDetailContainer from './components/PromoDetailContainer/PromoDetailContainer';
import LogIn from './components/LogIn/LogIn';
import Carrito from './components/Carrito/Carrito';
import Registro from './components/Registro/Registro';
import Footer from './components/Footer/Footer';
import { UserEmailContextProvider } from './context/UserEmailContext/userEmailContext';
import { UserPasswordContextProvider } from './context/UserPasswordContext/userPasswordContext';
import { UserNameContextProvider } from './context/UserNameContext/userNameContext';
import { UserPhoneContextProvider } from './context/UserPhoneContext/userPhoneContext';
import { UserAdressContextProvider } from './context/UserAdressContext/userAdressContext';
import { CartContextProvider } from './context/CartContext/cartContext';




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
                    <Route path='/Promos/:Categoria/:url' element={<PromoDetailContainer/>}/>
                    <Route path='/LogIn' element={<LogIn/>}/>
                    <Route path='/LogIn/Registro' element={<Registro/>}/>
                    <Route path='/Carrito' element={<Carrito/>}/>
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