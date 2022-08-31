import {Link} from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext/cartContext";

export default function CartWidget() {
    const sinBorde = {border: 'none'}
    const {cart, cantidadTotal} = useContext(cartContext)
    return (
        <Link to={'/Carrito'} className="btn btn-outline-light" style={sinBorde}>
            <i className="bi-cart-fill"></i>
            {cart.length === 0 ? (<span></span>):(<span className="badge bg-danger text-white ms-1 rounded-pill">{cantidadTotal()}</span>)}
        </Link>
    )
}