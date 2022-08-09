import './App.css';
import { Background } from './components/Background/Background';
import CategoriasContainer from './components/CategoriasContainer/CategoriasContainer';
import NavBar from './components/NavBar/NavBar';
import OfertaProductosContainer from './components/OfertaProductosContainer/OfertaProductosContainer';


function App() {
  return (
    <>
      <header>
        <NavBar/>
        <Background/>
      </header>
      <main>
        <CategoriasContainer/>
        <OfertaProductosContainer/>
      </main>
    </>
  );
}

export default App;