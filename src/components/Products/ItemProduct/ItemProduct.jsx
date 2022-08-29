import { Link } from "react-router-dom"

export default function ItemProduct({id,nombre, precio, img, stock, promo, descripción, url, categoria}) {
    const cardSize = {width: "300px"}
    const imgSize = {Height: "200px", maxHeight: '200px'}
    const hayPromo = promo !== undefined
    const badge ={top: '0.5rem', right: '0.5rem'}
    const total = Math.abs(precio * promo / 100 - precio)

    return (
        <div className="col col-lg-4 mb-5 center">
            <div className="card box h-100" style={cardSize}>
                <img className="card-img-top" src={img} alt={nombre} style={imgSize}/>
                    <div className="mt-auto text-center">
                        <h4 className="mt-3">{nombre}</h4>
                        {hayPromo ? (  
                        <>
                            <div className="badge bg-danger text-white position-absolute" style={badge}>{promo}%</div>
                            <h4 className="mt-1">
                                <span className="text-muted text-decoration-line-through me-2">${precio}</span>
                            ${total}
                            </h4>
                        </>
                        ) : (
                        <h4 className="mt-1">${precio}</h4>
                        )}
                        <Link to={`/${categoria}/${id}`}>
                            <button className="btn btn-outline-dark mt-2 mb-3">Ver más</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}