export default function CartItem({ id ,img, nombre, precio, cantidad, removeItem, precioTotal, precioPromo, promo}) {
    const imgCart = {height:'60px', width: "100px"}
    return (
        <tr>
            <th ><img style={imgCart} src={img} alt={nombre} className="rounded"/></th>
            <td className="fw-bolder">{nombre}</td>
            {promo !== undefined ? (
                <td >$ {precioPromo}</td>
            ) : (<td >$ {precio}</td>)}
            <td >{cantidad}</td>
            <th className="fw-bolder">$ {precioTotal}</th>
            <td><button className="btn btn-danger" onClick={()=> removeItem(id)}>X</button></td>
        </tr>
    )
}