import { useState } from "react";

export default function Contador( {inicial, stock} ) {
    const [cantidad, setCantidad] = useState(1)
    const handleDecrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    const handleIncrement = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }
    return (
        <div className="d-flex center">
            <button onClick={handleDecrement} className='btn'>-</button>
            <h6 className="mt-2 me-1 ms-1">{cantidad}</h6>
            <button onClick={handleIncrement} className='btn'>+</button>
        </div>
    )
}