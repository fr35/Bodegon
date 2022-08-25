import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../../context/CartContext/cartContext"
import CartItem from "../CartItem/CartItem"
import MediosDePago from "../MediosDePago/MediosDePago"

export default function CartContainer({precioNuevo}) {
    const empty = {marginTop: '100px', marginBottom: '250px'}
    const marginTop = {marginTop: '100px'}
    const borde = {borderStyle: 'ridge'}
    const {cart, removeItemInCart, precioTotalEnCarrito, removeAll} = useContext(cartContext)
    console.log(cart);
    function removeItem(id) {
        removeItemInCart(id)
    }
    console.log(precioNuevo);
    useEffect(()=> {}, [cart])

    if (cart.length === 0) {
        return (
            <main className="container" style={empty}>
                <h3 className="center mb-2">Carrito</h3>
                <hr className="mb-4"/>
                <h3 className="center mb-5">El carrito se encuentra vació</h3>
                <div className="center">
                    <Link to={'/'} className='btn btn-outline-dark'>Volver a Inicio</Link>
                </div>
            </main>
        )
    } 
    else {
        return (
            <main className="container" style={marginTop}>
                <h3 className="center mb-2">Carrito</h3>
                <hr className="mb-4"/>
                {cart.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            nombre={item.nombre}
                            precio={item.precio}
                            precioTotal={item.precio * item.cantidad}
                            cantidad={item.cantidad}
                            categoria={item.categoria}
                            stock={item.stock}
                            removeItem={removeItem}
                        />
                    )
                })}
                <div style={borde} className='container row center mb-3 mt-3 ms-0'>
                    <div className="row">
                        <div className="col d-md-flex justify-content-around mt-3 mb-3">
                            <h4 className="">Resumen</h4>
                            <h4 className="">Total a pagar: ${}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-block d-md-flex justify-content-around">
                            <h6>Nombre:</h6>
                            <h6>Domicilio: </h6>
                            <h6>Telefono:</h6>
                        </div>
                    </div>
                    <div className="center mt-3 mb-3">
                        <button className="btn btn-outline-dark me-1" onClick={removeAll}>Vaciar Carrito</button>
                        <button className="btn btn-outline-dark ms-1">Comprar</button>
                    </div>
                    <MediosDePago/>
                </div>
            </main>
        )
    }
}




