import {Link} from "react-router-dom"
import OfertaProducto from "../OfertaProducto/OfertaProducto"
export default function BtnAgregar({url}) {
    return (
        <Link to={url} className="btn btn-outline-dark mt-2">Ver más</Link>
    )
}