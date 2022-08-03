import { useState } from "react";
import BtnAgregar from "../BtnAgregar/BtnAgregar";

export default function Contador( {stock} ) {

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

    function agregarProd() {console.log(`agregaste ${cantidad} productos`);}

    return (
        <>
        <div className="d-flex center">
            <button onClick={restar} className='btn'>-</button>
            <h6 className="mt-2 me-1 ms-1">{cantidad}</h6>
            <button onClick={sumar} className='btn'>+</button>
        </div>
        <BtnAgregar cantidad={agregarProd}/>
        </>
    )
}