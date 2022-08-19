import { Link } from "react-router-dom"

export default function ItemProduct({id,nombre, precio, img, stock, promo, descripción, url, categoria}) {
    const cardSize = {width: "300px"}
    const imgSize = {Height: "200px", maxHeight: '200px'}

    return (
        <div className="col mb-5 center">
            <div className="card box h-100" style={cardSize}>
                <img className="card-img-top" src={img} alt={nombre} style={imgSize}/>
                    <div className="text-center mt-auto">
                        <h4 className="mt-3">{nombre}</h4>
                        <h4 className="mt-1">${precio}</h4>
                        <Link to={`/${categoria}/${url}`}>
                            <button className="btn btn-outline-dark mt-2 mb-3">Ver más</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}