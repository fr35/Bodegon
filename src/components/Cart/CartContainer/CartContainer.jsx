import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../../context/CartContext/cartContext"
import CartItem from "../CartItem/CartItem"
import MediosDePago from "../MediosDePago/MediosDePago"
import UserInfo from "../UserInfo/UserInfo"

export default function CartContainer() {
    const empty = {marginTop: '100px', marginBottom: '250px'}
    const marginTop = {marginTop: '100px'}
    const {cart, removeItemInCart, removeAll, precioTotalEnCarrito} = useContext(cartContext)
    function removeItem(id) {
        removeItemInCart(id)
    }
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
            <main style={marginTop}>
                <h3 className="mb-2 center">Carrito</h3>
                <div className="table-responsive">
                    <table className="table text-center text-nowrap table-hover ">
                        <thead className="">
                            <tr>
                                <th scope="col">Miniatura</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="col">Resumen</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">$ {precioTotalEnCarrito()}</th>
                                <th scope="col"><button className="btn btn-danger" onClick={()=> removeAll()}>Vaciar</button></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <UserInfo cart={cart} total={precioTotalEnCarrito()} removeAll={()=>removeAll()}/>
                <MediosDePago/>
            </main>
        )
    }
}




