import { userDataContext } from "../../../context/UserContext/userContext"
import { Link} from "react-router-dom"
import { useContext } from "react"
import dataBase from '../../../services/firebase'
import {collection, addDoc} from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";

export default function UserInfo({cart, total, removeAll}) {
    const {userName, userEmail, userPhone, userAdress} = useContext(userDataContext)
    const [orderId, setOrderId] = useState(false)
    const ordenDeCompra = {
        buyer: {userName,userEmail,userPhone,userAdress},
        items: [...cart],
        total: total,
        date: new Date()
    }
    async function orderToFirebase() {
        const collectionRef = collection(dataBase, "orders")
        const docRef = await addDoc(collectionRef, ordenDeCompra)
        setOrderId(docRef.id)
        console.log(orderId);
    }
    function finalizarCompra() {
        Swal.fire({
            title: 'Esta seguro de realizar la compra?',
            text: `El total es de $${total}`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Comprar'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Su compra ha sido realizada con éxito!',
                `En aproximadamente 30 minutos llegará su pedido a ${userAdress}`,
                'success'
            )}
            orderToFirebase()
            removeAll()
        })
    }
    
    return (
        <div className="">
                    <h4 className="mt-2 center">Detalle de facturación</h4>
                    <div className="d-flex justify-content-around mt-4 mb-2">
                        <p>Nombre: {userName}</p>
                        <p>Teléfono: {userPhone}</p>
                        <p>Dirección: {userAdress}</p>
                    </div>
                    {userName !== "" ? (
                        <div className="center mb-4">
                            <button className="btn btn-outline-dark" onClick={()=>finalizarCompra()}>Finalizar Compra</button>
                        </div>
                    ) : (
                        <div className="center mb-4">
                            <button className="btn btn-outline-dark" disabled>Finalizar Compra</button>
                        </div>
                    )}
                    <p className="text-center">Para realizar la compra es necesario haber iniciado sesión. (En caso de no haberlo hecho haga click <Link to={'/LogIn'}>aquí</Link>)</p>
                </div>
    )
}