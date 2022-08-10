import Contador from "../Contador/Contador"

export default function OfertaProducto({nombre, price, img, stock, oferta, id}) {
    const cardSize = {height: "400px", width: "250px"}
    const imgSize = {height: "200px",}
    const badge = {top: '0.5rem', right: '0.5rem'}
    const total = price - (price * oferta) / 100

    return (
        <div className="col mb-5">
        <div className="card" style={cardSize}>
            <div className="badge bg-dark text-white position-absolute" style={badge}>{oferta}%</div>
            <img className="card-img-top" src={img} alt="..." style={imgSize}/>
            <div className="card-body p-4">
                <div className="text-center">
                    <h5>{nombre}</h5>
                    <h5>
                        <span className="text-muted text-decoration-line-through me-2">${price}</span>
                        <span className="fw-bolder">${total}</span>
                    </h5>
                    <Contador stock={stock}/>
                </div>
            </div>
        </div>
    </div>
    )
}