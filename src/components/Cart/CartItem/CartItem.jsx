export default function CartItem({ id ,img, nombre, precio, cantidad, removeItem, precioTotal, precioPromo, promo}) {
    const imgCart = {height:'60px', width: "100px"}
    const backgroundNone = {background: 'none'}
    return (
        <tr>
            <th ><img style={imgCart} src={img} alt={nombre} className="rounded"/></th>
            <td className="fw-bolder">{nombre}</td>
            {promo !== undefined ? (
                <td >$ {precioPromo}</td>
            ) : (<td >$ {precio}</td>)}
            <td><h6 className="mt-2 me-1 ms-1" style={backgroundNone}>{cantidad}</h6></td>
            <th className="fw-bolder">$ {precioTotal}</th>
            <td><button className="btn btn-danger" onClick={()=> removeItem(id)}>X</button></td>
        </tr>
    )
}