export default function Categorias() {
    const Categorias = [
        {nombre: 'Hamburguesas'},
        {nombre: 'Pizzas & Empanadas'},
        {nombre: 'Milanesas'},
        {nombre: 'Helados'},
        {nombre: 'Pastas'},
        {nombre: 'Postres'},
    ]



    return (
        <div class="container mt-5">
            <h2 className="center mb-5">Categorias</h2>
            <div class="row">
                <div class="col">
                    <img class="" src="" alt="..."/>
                    <p className="">Hamburguesas</p>
                </div>
                <div class="col">
                    <img class="" src="" alt="..."/>
                <p className="">Pizzas & Empanadas</p>
                </div>
                <div class="col">
                    <img class="" src="" alt="..."/>
                    <p>Milanesas</p>
                </div>
                <div class="col">
                    <img class="" src="" alt="..."/>
                    <p>Helados</p>
                </div>
                <div class="col">
                    <img class="" src="" alt="..."/>
                    <p>Pastas</p>
                </div>
                <div class="col">
                    <img class="" src="" alt="..."/>
                    <p>Postres</p>
                </div>
            </div>
        </div>
    )
}