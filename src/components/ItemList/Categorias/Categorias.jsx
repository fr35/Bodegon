import CategoriaList from "./CategoriaList/CategoriaList";

export default function Categoria( props ) {
    const categorias = [
        {nombre: 'Hamburguesas', img: 'https://foodish-api.herokuapp.com/images/burger/burger63.jpg'},
        {nombre: 'Pizzas & Empanadas', img: 'https://foodish-api.herokuapp.com/images/pizza/pizza93.jpg'},
        {nombre: 'Milanesas', img: 'https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken11.jpg'},
        {nombre: 'Helados', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert29.jpg'},
        {nombre: 'Pastas', img: 'https://foodish-api.herokuapp.com/images/pasta/pasta12.jpg'},
        {nombre: 'Postres', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert1.jpg'},
    ]
    return (
        <div class="container mt-5">
            <h2 className="center mb-5">Categorias</h2>
            <div class="row">
                <CategoriaList data={categorias[0]}/>
                <CategoriaList data={categorias[1]}/>
                <CategoriaList data={categorias[2]}/>
                <CategoriaList data={categorias[3]}/>
                <CategoriaList data={categorias[4]}/>
                <CategoriaList data={categorias[5]}/>
            </div>
        </div>
    )
}