import { Link } from "react-router-dom"
import BtnCardProducts from "../BtnCardProducts/BtnCardProducts"
import Contador from "../Contador/Contador"


export default function OfertaProducto({id,nombre, price, img, stock, oferta, description}) {

    const cardSize = {height: "360px", width: "300px"}
    const imgSize = {Height: "200px", maxHeight: "200px"}
    const badge = {top: '0.5rem', right: '0.5rem'}
    const total = price - (price * oferta) / 100
    
    return (
        <div className="col mb-5 center">
        <div className="card" style={cardSize}>
            <div className="badge bg-danger text-white position-absolute" style={badge}>{oferta}%</div>
            <img className="card-img-top" src={img} alt={nombre} style={imgSize}/>
            <div className="card-body p-4">
                <div className="text-center">
                    <h4 className="fw-bolder">{nombre}</h4>
                    <h4>
                        <span className="text-muted text-decoration-line-through me-2">${price}</span>
                        <span className="fw-bolder">${total}</span>
                    </h4>
                    <Link to={`/detalle/${nombre}`}>
                        <BtnCardProducts text='Ver más'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}