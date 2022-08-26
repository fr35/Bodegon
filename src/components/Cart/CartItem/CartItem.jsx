import { useState } from "react"

export default function CartItem({ id ,img, nombre, precio, precioTotal, cantidad, categoria, stock, removeItem}) {
    const sinBordes = {border: "none"}
    const borde = {borderStyle: 'ridge'}
    const imgCart = {height:'50px'}
    const [quantity, setQuantity] = useState(cantidad)
    const precioNuevo = precio * quantity
    const sumar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const restar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <tr>
            <td>
                <img style={imgCart} src={img} alt={nombre} />
            </td>
            <td className="pt-4">{nombre}</td>
            <td className="pt-4">$ {precio}</td>
            <td className="pt-4">{quantity}</td>
            <th className="pt-4">$ {precioTotal}</th>
            <td><button className="btn btn-danger" onClick={()=> removeItem(id)}>X</button></td>
        </tr>
    )
}