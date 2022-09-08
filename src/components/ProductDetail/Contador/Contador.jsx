import { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../../Btn/Btn";

export default function Contador( {stock, onAdd} ) {
    const sinBordes = {border: "none", fontSize: '25px'}
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
                <button onClick={restar} className='btn text-white' style={sinBordes}>-</button>                               
                <h6 className="mt-2 me-1 ms-1">{cantidad}</h6>
                <button onClick={sumar} className='btn text-white' style={sinBordes}>+</button>
            </div>
            <div className="center" onClick={() => onAdd(cantidad)}>
                <Btn text={'Agregar al Carrito'}/>
            </div>
            <p className="center">Stock: {stock}</p>
        </div>
    )
}