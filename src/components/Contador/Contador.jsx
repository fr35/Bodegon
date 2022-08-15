import { useState } from "react";


export default function Contador( {stock} ) {
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
            <div className="d-flex center">
                <button onClick={restar} className='btn' style={sinBordes}>-</button>
                <h6 className="mt-2 me-1 ms-1">{cantidad}</h6>
                <button onClick={sumar} className='btn' style={sinBordes}>+</button>
            </div>
    )
}