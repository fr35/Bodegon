import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contador( {stock, onAdd} ) {
    const sinBordes = {border: "none"}
    const [cantidad, setCantidad] = useState(1)
    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    return (
        <div>
            <div className="d-flex center">
                <button onClick={restar} className='btn' style={sinBordes}>-</button>
                <h6 className="mt-2 me-1 ms-1">{cantidad}</h6>
                <button onClick={sumar} className='btn' style={sinBordes}>+</button>
            </div>
            <div className="center">
                <button to={'/Carrito'} className="btn btn-outline-dark" onClick={() => onAdd(cantidad)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}