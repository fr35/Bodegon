import { Link } from "react-router-dom"
import BtnCardProducts from "../BtnCardProducts/BtnCardProducts"
import Contador from "../Contador/Contador"

export default function OfertaDetail({id, nombre, img, price, oferta, description, stock}) {
    return (
        <section className="container">
            <div className="row">
                <div className="col center">
                    <img src={img}></img>
                </div>
                <div className="col">
                    <h2 className="center">{nombre}</h2>
                    <p className="mt-3">{description}</p>
                    <h5 className="center">
                        <span className="text-muted text-decoration-line-through me-2">${price}</span>
                        <span className="fw-bolder">$</span>
                    </h5>
                    <Contador/>
                    <Link to={'/'}>
                        <BtnCardProducts text={'Agregar al Carrito'}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}