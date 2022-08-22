import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext/cartContext";
import Contador from "../Contador/Contador";

export default function ItemDetail({id,nombre, precio, img, stock, promo, descripción, url, categoria}) {
    const margin = {marginTop: '100px', marginBottom: '170px'}
    const link = {marginRight: '20px', textDecoration: 'none'}
    const hr = {margin: '0rem'}
    const hayPromo = promo !== undefined
    const total = Math.abs(precio * promo / 100 - precio)
    const {addToCart} = useContext(cartContext)
    function handleAdd(cantidad) {
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
            <div className="row mt-3 d-md-flex d-block">
                <div className="col center">
                    <img src={img} alt={img} className='h-100 w-100 rounded'></img>
                </div>
                <div className="col mt-1">
                    <h3 className="center fw-bolder">{nombre}</h3>
                    <p className="mt-2 center text-black-50">{descripción}</p>
                    {hayPromo ? (<h4 className="mt-1 text-center fw-bolder">
                                    <span className="text-muted text-decoration-line-through me-2">${precio}</span>
                                    ${total}
                                </h4>) : (<h4 className="center fw-bolder">${precio}</h4>)}
                    <Contador stock={stock} onAdd={handleAdd}/>
                    <div>
                        <label htmlFor="comentarios" className="form-label"></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comentarios..." name="comentarios"></textarea>
                    </div>
                </div>
            </div>
        </section>
    )
}