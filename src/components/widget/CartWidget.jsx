import {Link} from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

export default function CartWidget() {
    const sinBorde = {border: 'none'}
    const {cart, cantidadTotal} = useContext(cartContext)
    return (
        <Link to={'/Carrito'} className="text-white me-4" style={sinBorde}>
            <div className="cartUnderline">
                <i className="bi-cart-fill"></i>
                {cart.length === 0 ? (<span></span>):(<span className="badge bg-light text-dark ms-1 rounded-pill">{cantidadTotal()}</span>)}
            </div>
        </Link>
    )
}