export default function Producto( props ) {
    return (
        <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src={props.data.img} alt="..."/>
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">{props.data.nombre}</h5>
                                    <p>{props.data.descript}</p>
                                    <h5 class="fw-bolder">${props.data.precio}</h5>
                                </div>
                            </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a></div>
                </div>
            </div>
        </div>
    )
}
