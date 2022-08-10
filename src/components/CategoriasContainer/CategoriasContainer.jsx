import CategoriaList from "../CategoriaList/CategoriaList"


export default function CategoriasContainer() {

    const categorias = [
        {nombre: 'Hamburguesas', img: 'https://foodish-api.herokuapp.com/images/burger/burger63.jpg'},
        {nombre: 'Pizzas & Empanadas', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza93.jpg'},
        {nombre: 'Milanesas', img: 'https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken11.jpg'},
        {nombre: 'Helados', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert29.jpg'},
        {nombre: 'Pastas', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta8.jpg'},
        {nombre: 'Postres', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert1.jpg'},
    ]
    
    return (
        <section className="container mt-5">
            <h2 className="center mb-3">Categorias</h2>
            <hr/>
            <div className="row">
                <CategoriaList data={categorias[0]}/>
            </div>
        </section>
    )
}