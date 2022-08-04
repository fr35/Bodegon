import Producto from "../Producto/Product";

export default function ProductContainer() {

    const productos = [
        {
            nombre: 'Hamburguesa Doble en Combo',
            precio: 1200,
            img: 'https://foodish-api.herokuapp.com/images/burger/burger6.jpg',
            descript: 'Hamburguesa doble con lechuga, tomate y queso',
            stock: 15,
        },
        {
            nombre: 'Pizza Muzzarella Individual',
            precio: 1000,
            img: 'https://foodish-api.herokuapp.com/images/pizza/pizza55.jpg',
            descript: 'Pizza Muzzarella individual 4 porciones',
            stock: 7,
        }
    ]
    

    return (
        <section className="container px-4 px-lg-5 mt-5">
                <h2 className="center mb-5">Productos</h2>
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Producto data={productos[0]}/>
                    <Producto data={productos[1]}/>
                </div>
            </section>
    )
}