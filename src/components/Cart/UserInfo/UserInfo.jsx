import { userDataContext } from "../../../context/UserContext/userContext"
import { Link } from "react-router-dom"
import { useContext } from "react"
import dataBase from '../../../services/firebase'
import { getDocs, collection, addDoc, query} from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";

export default function UserInfo({cart, total}) {
    const {userName, setUserName, userEmail, setUserEmail, userPassword, setUserPassword, userPhone, setUserPhone, userAdress, setUserAdress} = useContext(userDataContext)
    const [orderId, setOrderId] = useState(false)
    const ordenDeCompra = {
        buyer: {userName,userEmail,userPhone,userAdress},
        items: [...cart],
        total: total,
        date: new Date()
    }
    async function finalizarCompra(evt) {
        const collectionRef = collection(dataBase, "orders")
        const docRef = await addDoc(collectionRef, ordenDeCompra)
        setOrderId(docRef.id)
        Swal.fire(
            `Su compra ha sido realizada con éxito! Total: ${total}`, 
            `En aproximadamente 30 minutos llegará el pedido a ${userAdress}`,
            'success'
        )
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
                        <form className="center" onSubmit={evt=> finalizarCompra(evt)}>
                            <button className="btn btn-outline-dark" type="submit">Finalizar Compra</button>
                        </form>
                    ) : (
                        <div className="center mb-4">
                            <button className="btn btn-outline-dark" disabled>Finalizar Compra</button>
                        </div>
                    )}
                    <p className="text-center">Para realizar la compra es necesario haber iniciado sesión. (En caso de no haberlo hecho haga click <Link to={'/LogIn'}>aquí</Link>)</p>
                </div>
    )
}