import { useState } from "react"

export default function CartItem({ id ,img, nombre, precio, precioTotal, cantidad, categoria, stock, removeItem}) {
    const sinBordes = {border: "none"}
    const borde = {borderStyle: 'ridge'}
    const sumar = () => {
        if (cantidad < stock) {
            cantidad+=1
            console.log(cantidad);
        }
    }
    const restar = () => {
        if (cantidad > 1) {
            cantidad-=1
            precioTotal = precio * cantidad
        }
    }
    return (
        <div className="row mb-1 text-center center ms-0 container" style={borde}>
                <div className="col">
                    <img className="img-fluid" src={img}/>
                </div>
                <div className="col mt-3">
                    <h5 className="">{nombre}</h5>
                    <p className="text-black-50">{categoria}</p>
                </div>
                <div className="col mt-2">
                    <div className="center">
                        <button className='btn' style={sinBordes} onClick={restar}>-</button>             
                        <h6 className="mt-2">{cantidad}</h6>
                        <button className='btn' style={sinBordes} onClick={sumar}>+</button>
                    </div>
                    <p className="center mt-1">Stock:{stock}</p>
                </div>
                <div className="col mt-3 d-none d-md-block">
                    <h5 className="">${precio}</h5>
                    <p className="">Por Unidad</p>
                </div>
                <div className="col mt-3">
                    <h5 className="fw-bolder">${precioTotal}</h5>
                    <p className="">Total</p>
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={()=> removeItem(id)}>X</button>
                </div>
            </div>
    )
}