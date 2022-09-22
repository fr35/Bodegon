import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../../context/cartContext"
import Btn from "../../Btn/Btn"
import CartItem from "../CartItem/CartItem"
import MediosDePago from "../MediosDePago/MediosDePago"

export default function CartContainer() {
    const empty = {marginTop: '100px', marginBottom: '250px'}
    const marginTop = {marginTop: '100px'}
    const {cart, removeItemInCart, removeAll, precioTotalCompra} = useContext(cartContext)
    function removeItem(id) {
        removeItemInCart(id)
    }
    console.log(cart);
    useEffect(()=> {}, [cart])
    if (cart.length === 0) {
        return (
            <main className="container text-white" style={empty}>
                <h3 className="center mb-2">Carrito</h3>
                <hr className="mb-4"/>
                <h3 className="center mb-5">El carrito se encuentra vació</h3>
                <div className="center">
                    <Link to={'/'} className='btn btn-outline-light'>Volver a Inicio</Link>
                </div>
            </main>
        )
    } 
    
        return (
            <main style={marginTop}>
                <h3 className="mb-2 center text-white">Carrito</h3>
                <div className="table-responsive">
                    <table className="table text-center text-nowrap table-hover table-dark">
                        <thead>
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
                                        stock={item.stock}
                                        precioPromo={Math.abs(item.precio * item.promo / 100 - item.precio)}
                                        precioTotal={item.precioTotal}
                                        cantidad={item.cantidad}
                                        removeItem={removeItem}
                                        promo={item.promo}
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
                                <th scope="col">$ {precioTotalCompra()}</th>
                                <th scope="col"></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="center">
                    <div onClick={()=>removeAll()} className='me-3'>
                        <Btn text={'Vaciar Carrito'}/>
                    </div>
                    <div className="ms-3">
                        <Link to={'/Carrito/Checkout'}><Btn text={'Continuar'}/></Link>
                    </div>
                </div>
                <MediosDePago/>
            </main>
        )
    }




