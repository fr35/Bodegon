import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";

export default function ItemDetail({data}) {
    const marginTop = {}
    return (
        <section className="container" style={marginTop}>
            <div className="row">
                <div className="col center">
                    <img src={data.img} alt={data.img}></img>
                </div>
                <div className="col">
                    <h2 className="center">{data.nombre}</h2>
                    <p className="mt-3">{data.descripción}</p>
                    <h5 className="center">{data.precio}</h5>
                    <Contador stock={data.stock}/>
                    <Link to={'/'}>
                        <button className="btn btn-outline-dark mt-2">Ver más</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}