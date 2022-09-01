export default function CartItem({ id ,img, nombre, precio, cantidad, removeItem, total}) {
    const imgCart = {height:'60px', width: "100px"}
    const totalPrecioUnidadPromo = total * cantidad
    const totalPrecioUnidad = precio * cantidad
    return (
        <tr>
            <th ><img style={imgCart} src={img} alt={nombre} className="rounded"/></th>
            <td className="fw-bolder">{nombre}</td>
            {Number.isNaN(total) ? (
                <td >$ {precio}</td>
            ) : (<td >$ {total}</td>)}
            <td >{cantidad}</td>
            {Number.isNaN(total) ? (
                <th className="fw-bolder">$ {totalPrecioUnidad}</th>
            ) : (<th className="fw-bolder">$ {totalPrecioUnidadPromo}</th>)}
            <td><button className="btn btn-danger" onClick={()=> removeItem(id)}>X</button></td>
        </tr>
    )
}