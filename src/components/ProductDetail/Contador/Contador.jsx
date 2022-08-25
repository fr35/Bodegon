import { useContext } from "react";
import { useState } from "react";
import { cartContext } from "../../../context/CartContext/cartContext";

export default function Contador( {stock, onAdd, id, min} ) {
    const sinBordes = {border: "none"}
    const {sumar, restar} = useContext(cartContext)
    const [amount, setAmount] = useState(1)

    const add = () => {
        if (amount < stock) {
            setAmount(amount + 1)
            if (!(!!onAdd)) {
                sumar(id)
            }
        }
    }
    const subtract = () => {
        if (amount > min) {
            setAmount(amount - 1)
            if (!(!!onAdd)) {
                restar(id)
            }
        }
    }
    return (
        <div>
            <div className="d-flex center">
                <button onClick={subtract} className='btn' style={sinBordes}>-</button>
                <h6 className="mt-2 me-1 ms-1">{amount}</h6>
                <button onClick={add} className='btn' style={sinBordes}>+</button>
            </div>
            <div className="center">
                {
                    onAdd ? <button onClick={() => onAdd(amount)} className='btn btn-outline-dark'>Agregar al Carrito</button> : null
                }
            </div>
        </div>
    )
}