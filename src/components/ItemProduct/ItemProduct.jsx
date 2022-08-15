import { Link } from "react-router-dom"

export default function ItemProduct({id,nombre, precio, img, stock, promo, descripción, url}) {
    const cardSize = {height: "360px", width: "300px"}
    const imgSize = {Height: "200px", maxHeight: "200px"}

    return (
        <div className="col mb-5 center">
            <div className="card" style={cardSize}>
                <img className="card-img-top" src={img} alt={nombre} style={imgSize}/>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h4 className="fw-bolder">{nombre}</h4>
                        <h4>${precio}</h4>
                        <Link to={`/detalle/${url}`}>
                            <button className="btn btn-outline-dark mt-2">Ver más</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

