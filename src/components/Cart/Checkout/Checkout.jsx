import {collection, addDoc} from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/cartContext";
import dataBase from '../../../services/firebase' 

export default function Checkout() {
    const margin = {marginTop: '100px'}
    const backgroundNone = {background: 'none'}
    const form = {paddingLeft: '15vw', paddingRight: '15vw', paddingTop: '5vh', paddingBottom: '5vh'}
    const {cart, precioTotalCompra, removeAll} = useContext(cartContext)
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '', 
        address: '',
    })
    const [orderFirebase, setOrderFirebase] = useState({
        id: '',
        complete: false,
    })
    const ordenDeCompra = {
        buyer: { ...userData },
        items: [...cart],
        total: precioTotalCompra(),
        date: new Date(),
    }
    function inputChangeHandler(evt) {
        const input = evt.target
        const value = input.value
        const inputName = input.name
        let copyUserData = { ...userData }
        copyUserData[inputName] = value
        setUserData(copyUserData)
    }
    async function handleSubmit(evt) {
        evt.preventDefault();    
        const collectionRef = collection(dataBase, "orders")
        const order = await addDoc(collectionRef, ordenDeCompra)   
        setOrderFirebase({id: order.id, complete: true})
        removeAll()
    }

    if (orderFirebase.complete === true) {
        return (
            <main style={margin} className="text-white text-center">
                <div style={form}>
                    <div className="bg-dark bg-opacity-50 p-5">
                        <h3 style={backgroundNone} className="mb-4">Gracias por tu compra!</h3>
                        <p style={backgroundNone} className="mb-3">En aproximadamente 30 minutos llegará su pedido a {userData.address}</p>
                        <p style={backgroundNone}>El orden de seguimiento de su compra es: </p>
                        <p style={backgroundNone} className="center">{orderFirebase.id}</p>
                        <Link to={'/'} className="btn btn-outline-light mt-3">Volver a Inicio</Link>
                    </div>
                </div>
            </main>
        )
    }
    return (
        <main className="text-white text-center" style={margin}>
            <h3>Ingrese sus datos para finalizar la compra</h3>
            <hr className="text-white"/>
            <div className="center">
                <form className="card bg-dark bg-opacity-50" onSubmit={handleSubmit} style={form}> 
                    <div className="mb-2" style={backgroundNone}>
                        <label htmlFor="name" className="form-label" style={backgroundNone}>Nombre</label>
                        <input required
                            className="form-control"
                            value={userData.name}
                            onChange={inputChangeHandler}
                            name="name"
                            type="text"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="mb-2" style={backgroundNone}>
                        <label htmlFor="email" className="form-label" style={backgroundNone}>Email</label>
                        <input required
                            className="form-control"
                            value={userData.email}
                            onChange={inputChangeHandler}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-2" style={backgroundNone}>
                        <label htmlFor="phone" className="form-label" style={backgroundNone}>Teléfono</label>
                        <input required
                            className="form-control"
                            value={userData.phone}
                            onChange={inputChangeHandler}
                            name="phone"
                            type="text"
                            placeholder="Teléfono"
                        />
                    </div>
                    <div className="mb-2" style={backgroundNone}>
                        <label htmlFor="address" className="form-label" style={backgroundNone}>Domicilio</label>
                        <input required
                            className="form-control"
                            value={userData.address}
                            onChange={inputChangeHandler}
                            name="address"
                            type="text"
                            placeholder="Domicilio"
                        />
                    </div>
                    <input className='btn btn-outline-light mt-3' type="submit" value='Finalizar Compra'></input>
                </form>
            </div>
        </main>
    )
}