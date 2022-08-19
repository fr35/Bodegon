import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext/cartContext";
import Contador from "../Contador/Contador";

export default function ItemDetail({id,nombre, precio, img, stock, promo, descripción, url, categoria}) {
    const margin = {marginTop: '100px', marginBottom: '170px'}
    const link = {marginRight: '20px', textDecoration: 'none', }
    const hr = {margin: '0rem'}
    const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0)
    const {addToCart} = useContext(cartContext)
    function handleAdd(cantidad) {
        setCantidadEnCarrito(cantidad)
        const itemToCart = {id,nombre, precio, img, stock, promo, descripción, url, categoria}
        addToCart(itemToCart, cantidad)
    }
    return (
        <section className="container" style={margin}>
            <div className="d-flex me-5">
                <Link to={'/'} className='me-4 fst-italic text-decoration-none text-secondary'>
                    <h6>Home</h6>
                </Link>
                <Link to={`/Categoria/${categoria}`} style={link}>
                    <h6 className="fst-italic text-decoration-none text-secondary">{categoria}</h6>
                </Link>
            </div>
            <hr style={hr}/>
            <div className="row d-md-flex d-block mt-4">
                <div className="col center">
                    <img src={img} alt={img} className='w-100 h-100'></img>
                </div>
                <div className="col mt-1">
                    <h2 className="center fw-bolder">{nombre}</h2>
                    <p className="mt-3 center text-black-50">{descripción}</p>
                    <h4 className="center fw-bolder">${precio}</h4>
                    {cantidadEnCarrito === 0 ? (
                        <Contador stock={stock} onAdd={handleAdd}/>
                        ) : (
                        <a href="/Carrito">Ir al carrito</a>
                        )
                    }
                    <div className="mt-3 ms- center">
                        <label htmlFor="comentarios" className="form-label"></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comentarios..." name="comentarios"></textarea>
                    </div>
                </div>
            </div>
        </section>
    )
}