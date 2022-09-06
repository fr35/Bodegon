import { Link } from "react-router-dom"

export default function ItemProduct({id,nombre, precio, img, promo, categoria}) {
    const cardSize = {width: "300px"}
    const imgSize = { maxHeight: '200px', background: 'none'}
    const hayPromo = promo !== undefined
    const badge ={top: '0.5rem', right: '0.5rem'}
    const total = Math.abs(precio * promo / 100 - precio)
    const boton = {background: 'none', border: 'none', color: 'inherit'}
    const backgroundNone = {background: 'none'}

    return (
        <div className="col col-lg-4 mb-5 center">
            <div className="card h-100 bg-dark" style={cardSize}>
                <img className="img-fluid" src={img} alt={nombre} style={imgSize}/>
                    <div className="mt-auto text-center bg-dark bg-opacity-50">
                        <h4 className="mt-3 text-white" style={backgroundNone}>{nombre}</h4>
                        {hayPromo ? (  
                        <>
                            <div className="badge bg-danger text-white position-absolute" style={badge}>{promo}%</div>
                            <h4 className="mt-1 text-white" style={backgroundNone}>
                                <span className="text-muted text-decoration-line-through me-2" style={backgroundNone}>${precio}</span>
                            ${total}
                            </h4>
                        </>
                        ) : (
                        <h4 className="mt-1 text-white" style={backgroundNone}>${precio}</h4>
                        )}
                        <Link to={`/${categoria}/${id}`} className="btn btn-outline-light mt-2 mb-3">
                            <button style={boton}>Ver más</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}