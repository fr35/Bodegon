export default function Producto() {
    return (
        <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://foodish-api.herokuapp.com/images/burger/burger6.jpg" alt="..."/>
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">Hamburguesa</h5>
                                    <p>Hamburguesa doble con lechuga,tomate y queso</p>
                                    <h6 class="fw-bolder">$1000</h6>
                                </div>
                            </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a></div>
                </div>
            </div>
        </div>
    )
}