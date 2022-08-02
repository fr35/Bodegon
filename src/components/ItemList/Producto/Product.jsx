export default function Producto( props ) {
    const imgSize = {height: "200px",}
    return (
        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={props.data.img} alt="..." style={imgSize}/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{props.data.nombre}</h5>
                                    <p>{props.data.descript}</p>
                                    <h5 className="fw-bolder">${props.data.precio}</h5>
                                </div>
                            </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a></div>
                </div>
            </div>
        </div>
    )
}
